"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { GodlyButton } from "@/components/ui/godly-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";

const formSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  city: z.string().min(1),
  message: z.string(),
});

export function CTA() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <section
      id="cta"
      className="flex items-center gap-[96px] max-w-[1344px] mx-auto justify-center py-[120px] w-full relative"
    >
      <Image
        src="/images/home/cta/flowers.png"
        alt="Flowers"
        width={410}
        height={614}
        className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/3 -z-10 object-contain"
      />
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="max-w-[562px] text-[52px] font-marlton text-white leading-[72px] tracking-[3.12px] text-center relative">
            Together, let&apos;s make EVENING your favourite part of every day
            <span
              className="absolute inset-0 left-1/2 top-8 -translate-x-1/2 font-luminaire text-[#FFE7AF] rotate-[-8.065deg] text-[52px] ps-8 trim-text"
              style={{
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                WebkitTextStrokeWidth: "3.5px",
                WebkitTextStrokeColor: "#252323",
                paintOrder: "stroke fill",
              }}
            >
              Holiday
            </span>
          </h2>
          <p className="text-center font-satoshi text-xl font-medium leading-6">
            Contact us today for your free quote
          </p>
        </div>

        <a
          href="tel:+19548525326"
          className="relative max-w-fit mx-auto min-w-[336px] text-center text-[#2D2B2B] flex flex-col gap-1 px-6 py-8 hover:cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <Image
            src="/images/textures/cta-num-bg.png"
            alt="CTA Background"
            width={562.141}
            height={562.141}
            className="absolute inset-0 w-full h-full -z-10"
          />
          <div className="rotate-[-2deg] font-marlton text-2xl flex items-center gap-2.5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M7.83558 0.962002C8.01475 0.955695 8.19232 0.997673 8.34971 1.08354C8.50709 1.16941 8.63849 1.296 8.73016 1.45008L8.78497 1.55823L10.9582 6.48539C11.0458 6.68361 11.0665 6.90491 11.0174 7.11595C10.9683 7.327 10.852 7.51639 10.6859 7.6556L10.5884 7.72705L8.95041 8.78886L9.01697 8.8896C9.85739 10.126 10.9643 11.1583 12.2564 11.9104L12.3605 11.9688L13.3065 10.2627C13.4113 10.073 13.5749 9.92254 13.7727 9.83388C13.9705 9.74523 14.1917 9.72322 14.403 9.77117L14.5193 9.80613L19.5861 11.6304C19.7548 11.691 19.9041 11.7958 20.0184 11.9339C20.1327 12.0719 20.2078 12.2382 20.2358 12.4152L20.2471 12.5359L20.3867 16.5335C20.4445 18.1895 19.1492 19.5785 17.4332 19.6364C8.8412 19.4151 1.76769 12.819 0.944542 4.20447C0.917794 3.43973 1.18429 2.69367 1.6895 2.11894C2.1947 1.54421 2.90044 1.18426 3.6623 1.11274L3.83802 1.1016L7.83558 0.962002Z"
                fill="#2D2B2B"
              />
            </svg>
            <span className="trim-text">(954) 751-4128</span>
          </div>
          <p className="rotate-[-2deg] text-lg font-satoshi trakcing-[0.18px]">
            For Immediate Assistance
          </p>
        </a>
      </div>
      <div className="relative max-w-[562.141px] w-full">
        <Image
          src="/images/textures/cta-bg.png"
          alt="CTA Background"
          width={562.141}
          height={562.141}
          className="absolute inset-0 w-full h-full -z-10"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-[442px] mx-auto py-15 text-[#8D8C8C]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="border-b border-[#312E2C]">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      type="text"
                      {...field}
                      className={
                        "border-none shadow-none p-0 text-lg! font-medium placeholder:text-lg w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none"
                      }
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className=" border-b border-[#312E2C]">
                  <FormControl>
                    <Input
                      placeholder="Number"
                      type="text"
                      {...field}
                      className={
                        "border-none shadow-none p-0 text-lg! font-medium placeholder:text-lg w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none"
                      }
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className=" border-b border-[#312E2C]">
                  <FormControl>
                    <Input
                      placeholder="City or Town"
                      type="text"
                      {...field}
                      className={
                        "border-none shadow-none p-0 text-lg! font-medium placeholder:text-lg w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none"
                      }
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className=" border-b border-[#312E2C]">
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none border-none h-[160px] shadow-none p-0 text-lg! font-medium placeholder:text-lg w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus:outline-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <GodlyButton
              type="submit"
              className="max-w-full! w-full justify-center mt-6"
            >
              <span>REQUEST A QUOTE</span>
              <Image
                src={ArrowRight.src}
                alt="Arrow Right"
                width={32}
                height={33}
              />
            </GodlyButton>
          </form>
        </Form>
      </div>
    </section>
  );
}
