"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { CheckIcon, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { useQuoteModal } from "@/hooks/use-quote-modal";
import { DialogTitle } from "@radix-ui/react-dialog";
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
  "border-none shadow-none p-0 text-base sm:text-lg lg:text-xl font-marlton placeholder:text-base placeholder:text-[#d3c8b8] placeholder:sm:text-lg placeholder:lg:text-xl w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none";

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
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
    // Close modal after submission
    closeModal();
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-fit bg-paper-14 border-none p-0 gap-0"
        showCloseButton={true}
      >
        {/* Header */}
        <DialogTitle className="sr-only">LET US CALL YOU!</DialogTitle>
        <div className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-8 py-4 sm:py-6 justify-between items-start sm:items-center bg-paper-16 rounded-t-[6px] sm:rounded-t-[8px] lg:rounded-t-[10px] relative z-10 gap-3 sm:gap-0">
          <div className="flex-1">
            <h2 className="font-marlton text-2xl sm:text-3xl lg:text-4xl tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px] leading-[100%] text-[#2D2B2B]">
              LET US CALL YOU!
            </h2>
            <p className="font-satoshi text-sm sm:text-base lg:text-lg font-medium text-[#2D2B2B] mt-2">
              Receive a call within 30 minutes during normal business hours.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="flex items-center absolute top-4 z-10 right-4 justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] transition-all duration-300 shrink-0"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#2D2B2B]" />
        </button>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 sm:p-6 lg:p-8 relative z-10 text-[#312E2C]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel className="text-sm sm:text-base">Name</FormLabel>
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
                  <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel htmlFor="email" className="text-sm sm:text-base">
                      Email
                    </FormLabel>
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
                  <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel htmlFor="phone" className="text-sm sm:text-base">
                      Phone
                    </FormLabel>
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
                  <FormItem className="sm:col-span-6 pb-2 sm:pb-3 gap-2 sm:gap-3 border-b border-[#312E2C]">
                    <FormLabel
                      htmlFor="zipCode"
                      className="text-sm sm:text-base"
                    >
                      Zip Code
                    </FormLabel>
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8 gap-4 sm:gap-0">
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="size-5 sm:size-6 border border-black cursor-pointer shrink-0 flex items-center justify-center mt-0.5"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  {isChecked && (
                    <CheckIcon className="size-3 sm:size-4 text-black shrink-0" />
                  )}
                </button>
                <span
                  className="text-[#312E2C] font-satoshi cursor-pointer text-sm sm:text-base lg:text-lg font-medium select-none leading-relaxed"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  I agree to get information text messages from Godly about my
                  estimate and project
                </span>
              </div>
              <GodlyButton
                type="submit"
                className="ms-4 mt-4 sm:mt-0 disabled:opacity-50 disabled:cursor-not-allowed!"
                disabled={isSubmitting || !isChecked}
              >
                <span>{isSubmitting ? "SENDING..." : "REQUEST A QUOTE"}</span>
                {!isSubmitting && (
                  <Image
                    src={ArrowRight.src}
                    alt="Arrow Right"
                    width={24}
                    height={25}
                    className="sm:w-8 sm:h-[33px]"
                  />
                )}
              </GodlyButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
