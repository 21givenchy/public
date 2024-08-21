import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Palontologist",
  description: "Learn about Palontologist's background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
      <div className="flex-1">
        <h1 className="mb-6 text-4xl font-bold">About Palontologist</h1>
        <p className="text-lg">
          Palontologist is a passionate software developer and entrepreneur, < br /> dedicated to creating innovative solutions and fostering tech communities.
        </p>
      </div>
      <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
        <Image
          src="/palontologist.jpg" // Replace with your image path
          alt="Palontologist"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Software Stack</h2>
        <ul className="list-disc pl-5">
          <li>Frontend: React, Next.js, TypeScript</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Cloud: AWS, Google Cloud Platform</li>
          <li>Other: Docker, Git, CI/CD</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-medium">frontforumfocus</h3>
            <p>Founder of a platform dedicated to helping businesses identify sustainability metrics and individuals track their impact on the planet.</p>
          </li>
          <li>
            <h3 className="text-xl font-medium">Afriorbit.space</h3>
            <p>Contributing as a software developer to innovative space technology solutions for Africa.</p>
          </li>
        </ul>
      </section>

    
<section>
  <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
  <ul className="space-y-6">
    <li>
      <h3 className="text-xl font-medium">Founder - Front Forum Focus</h3>
      <p className="text-sm text-gray-600">2020 - Present</p>
      <p>Leading the development and growth of a tech-focused community platform.</p>
    </li>
    <li>
      <h3 className="text-xl font-medium">Software Developer - Afriorbit.space</h3>
      <p className="text-sm text-gray-600">May 2023 - Present</p>
      <p>Developing cutting-edge space technology solutions for the African continent.</p>
    </li>
    <li>
      <h3 className="text-xl font-medium">Co-Director - Startup Grind Kabarak University</h3>
      <p className="text-sm text-gray-600">August 2023 - Present</p>
      <p>Fostering entrepreneurship and innovation within the university community.</p>
    </li>
    <li>
      <h3 className="text-xl font-medium">National Organiser - Startup Universe Kenya</h3>
      <p className="text-sm text-gray-600">2023</p>
      <p>Coordinating and organizing startup events and initiatives across Kenya.</p>
    </li>
  </ul>
</section>
    </div>
  );
}