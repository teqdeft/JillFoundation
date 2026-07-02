"use client";

import { useState } from "react";
import { CreditCard, Landmark, Lock, ShieldCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby-upeh4Iglv1sMgF3AAsfuS_8VU-W7t5OxQ8DAYCPjT4A-NtQE3YMXjCVwIWHW3DTkIA/exec";

const METHODS = [
  { id: "card", label: "Credit / Debit Card", Icon: CreditCard },
  { id: "paypal", label: "PayPal", Icon: null },
] as const;

export function DonationForm() {
  const [method, setMethod] = useState<string>(
    "https://www.paypal.com/ncp/payment/83ZFTP5CLTNF4",
  );
  const [updates, setUpdates] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
        body: JSON.stringify({ firstName, lastName, email, phone }),
      });
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      {/* Left: form */}
      <form className="space-y-8" onSubmit={handleSubmit}>
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
              Your information has been saved. Thank you!
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "SUBMIT & PROCEED TO PAYMENT"
            )}
          </button>
        </div>

        <div>
          <h3 className="font-serif text-xl font-bold text-forest">
            2. Payment
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {METHODS.map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.paypal.com/ncp/payment/83ZFTP5CLTNF4",
                    "_blank",
                  )
                }
                className={cn(
                  "flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm font-medium transition-colors",
                  method === id
                    ? "border-brand bg-brand-soft/40 text-forest"
                    : "border-input text-muted-foreground hover:border-brand/50",
                )}
              >
                {Icon ? (
                  <Icon className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-bold text-brand-blue">
                    Pay
                    <span className="text-brand-blue/70">Pal</span>
                  </span>
                )}
                {id !== "paypal" && label}
              </button>
            ))}
          </div>

          {method === "paypal" && (
            <p className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
              You&apos;ll be redirected to PayPal to complete your donation
              securely.
            </p>
          )}

          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Your donation is secure and encrypted.
          </p>
        </div>
      </form>

      {/* Right: summary */}
      {/* <aside className="h-fit rounded-2xl bg-muted/60 p-6 ring-1 ring-border sm:p-8">
        <h3 className="font-serif text-xl font-bold text-forest">
          Your Donation Summary
        </h3>
        <div className="mt-6 flex items-center justify-between border-b border-border pb-4 text-sm">
          <span className="text-muted-foreground">One-time donation</span>
          <span className="font-semibold text-foreground">$50</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-forest">Total</span>
          <span className="font-serif text-lg font-bold text-forest">
            $50 USD
          </span>
        </div>
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
        >
          COMPLETE DONATION
          <Lock className="h-4 w-4" />
        </button>
        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-5 w-5 text-brand" />
          Your gift is tax-deductible.
        </p>
      </aside> */}
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
