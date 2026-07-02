"use client";

import { useState } from "react";
import { Lock, Loader2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby-upeh4Iglv1sMgF3AAsfuS_8VU-W7t5OxQ8DAYCPjT4A-NtQE3YMXjCVwIWHW3DTkIA/exec";

const PAYPAL_URL = "https://www.paypal.com/ncp/payment/83ZFTP5CLTNF4";

export function DonationForm() {
  const [updates, setUpdates] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ firstName, lastName, email, phone, organization }),
      });
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setOrganization("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Step 1: Info */}
        <div>
          <h3 className="font-serif text-xl font-bold text-forest">
            1. Your Information
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="First Name"
              aria-label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              placeholder="Last Name"
              aria-label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <Input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <Input
              type="tel"
              placeholder="Phone No"
              aria-label="Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <Input
              placeholder="Organization Name (Optional)"
              aria-label="Organization Name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <label className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={updates}
              onChange={(e) => setUpdates(e.target.checked)}
              className="h-4 w-4 rounded border-input accent-brand"
            />
            I&apos;d like to receive updates about the impact of my gift.
          </label>

          {error && (
            <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
          )}

          {submitted && (
            <p className="mt-3 text-sm font-medium text-brand">
              Your information has been saved. You can now proceed to donate!
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || submitted}
            className={cn(
              "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200",
              submitted
                ? "bg-brand/20 text-brand cursor-default"
                : "bg-forest text-forest-foreground hover:bg-forest/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100",
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : submitted ? (
              "INFORMATION SAVED ✓"
            ) : (
              "SAVE & CONTINUE"
            )}
          </button>
        </div>

        {/* Step 2: Donate */}
        <div>
          <h3
            className={cn(
              "font-serif text-xl font-bold transition-colors duration-300",
              submitted ? "text-forest" : "text-muted-foreground/50",
            )}
          >
            2. Complete Your Donation
          </h3>

          <a
            href={submitted ? PAYPAL_URL : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!submitted) e.preventDefault();
            }}
            className={cn(
              "mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-300",
              submitted
                ? "bg-brand text-brand-foreground shadow-md hover:bg-brand/90 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] cursor-pointer animate-in fade-in slide-in-from-bottom-2"
                : "bg-muted text-muted-foreground/40 cursor-not-allowed",
            )}
          >
            <Heart className="h-5 w-5 fill-current" />
            DONATE NOW
          </a>

          {!submitted && (
            <p className="mt-3 text-center text-xs text-black animate-pulse">
              Please fill in your information above first.
            </p>
          )}

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Your donation is secure and encrypted.
          </p>
        </div>
      </form>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20",
        props.className,
      )}
    />
  );
}
