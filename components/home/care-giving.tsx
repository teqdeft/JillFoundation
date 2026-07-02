"use client";

import Image from "next/image";
import { useState } from "react";
import { HeartHandshake, Heart, Lock } from "lucide-react";
import Link from "next/link";

export function CareGiving() {
  const [amount, setAmount] = useState("");

  return (
    <div className="rounded-2xl bg-brand-soft/30 p-6 ring-1 ring-brand/10 sm:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <HeartHandshake className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand">
                2. I Care Giving
              </h3>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                Give a gift of any amount.{"\n"}You decide. Your impact is real.
              </p>
            </div>
          </div>
          <div className="relative mt-6 h-32 w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/images/caregiving.png"
              alt="A supportive group in conversation"
              fill
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          {/* <p className="text-center text-sm font-medium text-foreground">
            You choose the amount
          </p>
          <div className="mt-3 flex items-center gap-3 rounded-lg border border-brand/20 bg-background px-4 py-3">
            <span className="text-2xl font-bold text-forest">$</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent text-2xl font-semibold text-foreground outline-none placeholder:text-muted-foreground/60"
            />
          </div> */}
          <Link
            type="button"
            href="/donate"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-brand-foreground transition-all duration-200 hover:bg-brand/90 hover:shadow-md hover:scale-[1.03] active:scale-[0.97]"
          >
            Donate NOW
            <Heart className="h-5 w-5 fill-current" />
          </Link>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            One-time gift. Maximum impact.
          </p>
        </div>
      </div>
    </div>
  );
}
