"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DomainCardProps {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  website: string
  color: string
  accentColor: string
  delay: number
}

export default function DomainCard({
  title,
  description,
  icon: Icon,
  website,
  color,
  accentColor,
  delay,
}: DomainCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="animate-slideUp opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`group h-full rounded-2xl p-8 transition-all duration-300 cursor-pointer border border-slate-200 hover:border-slate-300 ${
          isHovered ? "shadow-2xl -translate-y-2" : "shadow-lg hover:shadow-xl"
        } hover:bg-gradient-to-br ${color}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`mb-6 inline-flex p-3 rounded-lg bg-white ${accentColor} shadow-md transform transition-transform duration-300 ${isHovered ? "scale-110 rotate-6" : "scale-100"}`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>

        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

        <Link href={`https://${website}`} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
            <span>{website}</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  )
}
