"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";
import {
  ContactFormData,
  SERVICE_INTERESTS,
  BUDGET_RANGES,
  COUNTRY_CODES,
} from "@/types/contact";
import { validatePhoneNumber } from "@/lib/validations";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface ContactFormProps {
  className?: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    company: "",
    subject: "",
    serviceInterest: "",
    budgetRange: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      setCaptchaLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setCaptchaLoaded(true);
    script.onerror = () => {
      console.warn("Failed to load reCAPTCHA, proceeding without it");
      setCaptchaLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="recaptcha"]`);
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "phone" && formData.countryCode) {
      const isValid = validatePhoneNumber(value, formData.countryCode);
      if (!isValid && value.length > 0) {
        const country = COUNTRY_CODES.find(
          (c) => c.code === formData.countryCode
        );
        setErrors((prev) => ({
          ...prev,
          phone: `Please enter a valid ${country?.maxLength}-digit phone number for ${country?.country}`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (
      !validatePhoneNumber(formData.phone, formData.countryCode || "+91")
    ) {
      const country = COUNTRY_CODES.find(
        (c) => c.code === formData.countryCode
      );
      newErrors.phone = `Invalid phone number for ${country?.country}`;
    }

    if (!formData.subject || formData.subject.trim().length < 3)
      newErrors.subject = "Subject must be at least 3 characters";

    if (!formData.message || formData.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getCaptchaToken = async (): Promise<string> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey || !captchaLoaded || !window.grecaptcha) {
      console.warn("reCAPTCHA not available, proceeding without verification");
      return "no-captcha-available";
    }

    try {
      return new Promise((resolve) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action: "contact_form" })
            .then(resolve)
            .catch((error: unknown) => {
              console.warn("reCAPTCHA execution failed:", error);
              resolve("captcha-failed");
            });
        });
      });
    } catch (error: unknown) {
      console.warn("reCAPTCHA error:", error);
      return "captcha-error";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const captchaToken = await getCaptchaToken();

      const response = await fetch("/api/contacts1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! We've sent a confirmation email. We'll get back to you within 24 hours."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          company: "",
          subject: "",
          serviceInterest: "",
          budgetRange: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "Something went wrong. Please try again."
        );
        if (result.errors) setErrors(result.errors);
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = COUNTRY_CODES.find(
    (c) => c.code === formData.countryCode
  );

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      {/* Entire form here unchanged — rest of your component */}
    </div>
  );
}
