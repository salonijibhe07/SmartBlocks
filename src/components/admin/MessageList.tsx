"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Building, Calendar, Globe, Star, MessageSquare } from "lucide-react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company?: string;
  subject: string;
  serviceInterest?: string;
  budgetRange?: string;
  message: string;
  isVerified: boolean;
  captchaScore?: number;
  ipAddress?: string;
  userAgent?: string;
  status: 'new' | 'in_progress' | 'replied' | 'closed' | 'spam';
  adminNotes?: string;
  repliedAt?: string;
  repliedBy?: string;
  createdAt: string;
  updatedAt: string;
}

interface ContactResponse {
  success: boolean;
  contacts: ContactMessage[];
  totalPages: number;
  currentPage: number;
  total: number;
  message?: string;
}

export default function MessagesList() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingStatus, setEditingStatus] = useState<{ [key: number]: { status: string; notes: string } }>({});

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      
      const response = await fetch(`/api/contacts?${params}`);
      const data: ContactResponse = await response.json();
      
      if (data.success) {
        setMessages(data.contacts);
      } else {
        setError(data.message || 'Failed to fetch messages');
      }
    } catch (err) {
      setError('Failed to load contact messages');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [statusFilter]);

  const updateContactStatus = async (contactId: number) => {
    const updates = editingStatus[contactId];
    if (!updates) return;

    try {
      const response = await fetch('/api/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: contactId,
          status: updates.status,
          adminNotes: updates.notes,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Update local state
        setMessages(prev => prev.map(msg => 
          msg.id === contactId 
            ? { ...msg, status: updates.status as any, adminNotes: updates.notes }
            : msg
        ));
        // Clear editing state
        setEditingStatus(prev => {
          const newState = { ...prev };
          delete newState[contactId];
          return newState;
        });
      }
    } catch (error) {
      console.error('Failed to update contact status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in_progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      case 'spam': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <div className="p-4 text-center text-gray-500">Loading contact messages...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Contact Messages ({messages.length})
        </h3>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Messages</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="spam">Spam</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center text-gray-500">
            No contact messages found.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card key={msg.id} className="w-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {msg.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {msg.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {msg.countryCode} {msg.phone}
                      </div>
                      {msg.company && (
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {msg.company}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(msg.status)}>
                      {msg.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                    {msg.isVerified && (
                      <Badge variant="outline" className="text-green-600">
                        Verified
                      </Badge>
                    )}
                    {msg.captchaScore && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Star className="h-3 w-3" />
                        {(msg.captchaScore * 100).toFixed(0)}%
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Subject</h5>
                    <p className="text-gray-700 dark:text-gray-300">{msg.subject}</p>
                  </div>
                  
                  {msg.serviceInterest && (
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Service Interest</h5>
                      <p className="text-gray-700 dark:text-gray-300">{msg.serviceInterest}</p>
                    </div>
                  )}
                  
                  {msg.budgetRange && (
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-1">Budget Range</h5>
                      <p className="text-gray-700 dark:text-gray-300">{msg.budgetRange}</p>
                    </div>
                  )}
                  
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Submitted</h5>
                    <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    {msg.message}
                  </p>
                </div>

                {msg.adminNotes && (
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">Admin Notes</h5>
                    <p className="text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md border border-yellow-200 dark:border-yellow-800">
                      {msg.adminNotes}
                    </p>
                  </div>
                )}

                {/* Status Update Section */}
                <div className="border-t pt-4 space-y-3">
                  <h5 className="font-medium text-gray-900 dark:text-white">Update Status</h5>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select 
                      value={editingStatus[msg.id]?.status || msg.status} 
                      onValueChange={(value) => setEditingStatus(prev => ({
                        ...prev,
                        [msg.id]: { 
                          ...prev[msg.id],
                          status: value, 
                          notes: prev[msg.id]?.notes || msg.adminNotes || ''
                        }
                      }))}
                    >
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="spam">Spam</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button 
                      onClick={() => updateContactStatus(msg.id)}
                      disabled={!editingStatus[msg.id]}
                      className="w-full sm:w-auto"
                    >
                      Update Status
                    </Button>
                  </div>
                  
                  <Textarea
                    placeholder="Add admin notes..."
                    value={editingStatus[msg.id]?.notes || msg.adminNotes || ''}
                    onChange={(e) => setEditingStatus(prev => ({
                      ...prev,
                      [msg.id]: { 
                        ...prev[msg.id],
                        status: prev[msg.id]?.status || msg.status,
                        notes: e.target.value
                      }
                    }))}
                    className="w-full"
                    rows={3}
                  />
                </div>

                {/* Technical Info */}
                {(msg.ipAddress || msg.userAgent) && (
                  <details className="text-xs text-gray-500 dark:text-gray-400">
                    <summary className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                      Technical Details
                    </summary>
                    <div className="mt-2 space-y-1">
                      {msg.ipAddress && <p>IP Address: {msg.ipAddress}</p>}
                      {msg.userAgent && <p>User Agent: {msg.userAgent}</p>}
                    </div>
                  </details>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
