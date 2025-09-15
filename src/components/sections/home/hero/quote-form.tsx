"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string({
      message: "A name is required.",
    })
    .min(1, { message: "A name is required." }),
  email: z.email({
    message: "A valid email is required.",
  }),
  phone: z
    .string({
      message: "A phone number is required.",
    })
    .refine((val) => val.replace(/\D/g, "").length === 10, {
      message: "Enter a valid 10-digit phone number.",
    }),
  zipCode: z
    .string({
      message: "A zip code is required.",
    })
    .regex(/^\d{5}(?:[-\s]?\d{4})?$/, {
      message: "Enter a valid US ZIP code (e.g. 33101 or 33101-1234).",
    }),
});

export const inputClasses =
  "border-none shadow-none p-0! h-auto [text-box-trim:none]! text-lg sm:text-xl lg:text-2xl font-marlton placeholder:text-lg placeholder:text-[#d3c8b8] placeholder:sm:text-xl placeholder:lg:text-2xl w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none";

interface QuoteFormProps {
  hideImages?: boolean;
  size?: "sm" | "lg";
}

export function QuoteForm({ hideImages = false, size = "lg" }: QuoteFormProps) {
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      zipCode: "",
    },
  });
  const { isSubmitting } = form.formState;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(
        "https://hook.us1.make.com/gn5b64g52ssz7of2pcf8yoapbk5a1vdh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Webhook error:", errorText);
      } else {
        alert("Thanks! We'll contact you shortly.");
        try {
          // Reset form fields and checkbox state
          form.reset();
          setIsChecked(false);
        } catch (resetError) {
          console.error("Form reset exception:", resetError);
        }
      }
    } catch (error) {
      console.error("Webhook exception:", error);
    }
    console.log(values);
  }

  return (
    <div className="bg-paper-14 rounded-[6px] sm:rounded-[8px] lg:rounded-[10px] flex flex-col gap-2 sm:gap-3 text-[#2D2B2B] max-w-[1332px] w-full relative">
      <div
        className={cn(
          "flex flex-col sm:flex-row px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 justify-between items-start sm:items-center bg-paper-16 rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] relative z-10 gap-3 sm:gap-0",
          size === "sm" && "sm:flex-col"
        )}
      >
        <h2
          className={cn(
            "font-marlton text-[32px] sm:text-[48px] lg:text-[64px] tracking-[1.6px] sm:tracking-[2.4px] lg:tracking-[3.2px] leading-[100%]",
            size === "sm" && "text-[24px] sm:text-[32px] lg:text-[48px]"
          )}
        >
          LET US CALL YOU!
        </h2>
        <p
          className={cn(
            "font-satoshi max-w-[367px] text-left sm:text-right text-base sm:text-lg lg:text-2xl font-medium",
            size === "sm" &&
              "text-sm sm:text-base lg:text-lg text-center sm:text-center"
          )}
        >
          Receive a call within 30 minutes during normal business hours.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 sm:p-6 lg:p-8 relative z-10 text-[#312E2C]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="name"
                      placeholder="YOUR NAME"
                      type="text"
                      {...field}
                      className={inputClasses}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    autoComplete="email"
                    placeholder="YOUR EMAIL"
                    type="email"
                    {...field}
                    className={inputClasses}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <div className="relative">
                    <Input
                      id="phone"
                      autoComplete="tel"
                      placeholder="YOUR PHONE NUMBER"
                      type="tel"
                      inputMode="tel"
                      value={formatPhone(field.value)}
                      onChange={(e) => {
                        const digitsOnly = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        field.onChange(digitsOnly);
                      }}
                      className={cn(inputClasses)}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-3 sm:gap-4 border-b border-[#312E2C]">
                  <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
                  <Input
                    id="zipCode"
                    autoComplete="postal-code"
                    placeholder="ZIP CODE"
                    inputMode="numeric"
                    type="text"
                    {...field}
                    className={inputClasses}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={cn(
              "flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8.5 gap-4 sm:gap-0",
              size === "sm" && "sm:flex-col sm:gap-4"
            )}
          >
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="size-[22px] border border-black cursor-pointer shrink-0 flex items-center justify-center"
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && (
                  <CheckIcon className="size-4 text-black shrink-0" />
                )}
              </button>
              <span
                className="text-[#312E2C] font-satoshi cursor-pointer text-base sm:text-lg lg:text-xl font-medium select-none"
                onClick={() => setIsChecked(!isChecked)}
              >
                I agree to get information text messages from Godly about my
                estimate and project
              </span>
            </div>
            <GodlyButton type="submit" disabled={isSubmitting || !isChecked}>
              <span>{isSubmitting ? "SENDING..." : "REQUEST A QUOTE"}</span>
              {!isSubmitting && (
                <Image
                  src={ArrowRight.src}
                  alt="Arrow Right"
                  width={32}
                  height={33}
                />
              )}
            </GodlyButton>
          </div>
        </form>
      </Form>

      <div className="absolute flex items-center justify-center -top-[75px] sm:-top-[100px] lg:-top-[150px] -right-16 sm:-right-24 lg:-right-33 w-[180px] sm:w-[270px] lg:w-[354.512px] h-[180px] sm:h-[270px] lg:h-[353.446px] rotate-[-16deg] z-0">
        <Image
          src="/images/home/hero/tape.webp"
          alt="Tape"
          width={234.158}
          height={266.58}
          className="shrink-0 w-[120px] sm:w-[180px] lg:w-[234.158px] h-auto"
        />
      </div>

      {!hideImages && (
        <>
          <Image
            src="/images/home/hero/hero-lights-left.webp"
            alt="Hero Lights Left"
            width={382.851}
            height={253.958}
            className="shrink-0 rotate-[-24deg] scale-x-[-1] aspect-[101/67] absolute -bottom-16 sm:-bottom-32 lg:-bottom-62 -left-8 sm:-left-26 lg:-left-52 -z-10 w-[150px] sm:w-[250px] lg:w-[382.851px]"
          />
          <Image
            src="/images/home/hero/hero-lights-right.webp"
            alt="Hero Lights Right"
            width={465.548}
            height={308.814}
            className="shrink-0 aspect-[101/67] rotate-[22deg] absolute -bottom-8 sm:-bottom-16 lg:-bottom-32 -right-8 sm:-right-16 lg:-right-32 -z-10 w-[180px] sm:w-[300px] lg:w-[465.548px]"
          />
        </>
      )}
    </div>
  );
}
