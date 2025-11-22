// Test contact form submission after fixes
const testFormData = {
  name: "Test User",
  email: "test@example.com",
  phone: "9876543210",
  countryCode: "+91",
  company: "Test Company",
  subject: "Testing Contact Form",
  serviceInterest: "Web Development",
  budgetRange: "₹50,000 - ₹1,00,000",
  message: "This is a test message to check if the contact form is working properly after fixing the validation and email issues.",
  captchaToken: "no-captcha-available"
};

async function testForm() {
  try {
    console.log('Testing contact form submission...');
    
    const response = await fetch('http://localhost:3001/api/contacts1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData)
    });
    
    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response body:', result);
    
    if (result.success) {
      console.log('✅ Contact form submission successful!');
      console.log('Contact ID:', result.contactId);
      
      // Test fetching the contact
      console.log('\nTesting contact fetch...');
      const fetchResponse = await fetch('http://localhost:3001/api/contacts');
      const fetchResult = await fetchResponse.json();
      
      if (fetchResult.success) {
        console.log('✅ Contact fetch successful!');
        console.log('Total contacts:', fetchResult.total);
        console.log('Latest contact:', fetchResult.contacts[0]?.name);
      } else {
        console.log('❌ Contact fetch failed:', fetchResult.message);
      }
    } else {
      console.log('❌ Contact form submission failed:', result.message);
      if (result.errors) {
        console.log('Validation errors:', result.errors);
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

testForm();