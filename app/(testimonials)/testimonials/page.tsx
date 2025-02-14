import { BASE_URL } from "@/lib/globals";
import TestimonialHero from "./_components/TestimonialHero";
import TestimonialSection from "./_components/TestimonialSection";

export const dynamic = "force-dynamic"; 

async function getTestimonials() {
  try {
    const res = await fetch(`${BASE_URL}/api/testimonials`, {
      cache: "no-store", // Ensures fresh data every request
       
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return []; // Return empty array to avoid crashes
  }
}

export default async function Page() {
  const testimonials = await getTestimonials();

  return (
    <div>
      <TestimonialHero />
      <TestimonialSection testimonials={testimonials} />
    </div>
  );
}
