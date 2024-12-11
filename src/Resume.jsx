import { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Calendar
} from 'lucide-react';

export default function Resume() {
  const [visitors, setVisitors] = useState(0);

  const personalInfo = {
    name: "Shivam Jai Singh",
    title: "Cloud Engineer",
    email: "ishivam3112@gmail.com",
    location: "Ottawa, Ontario",
    linkedin: "linkedin.com/in/shivamsinghshiva/",
    github: "github.com/shivamjaisingh"
  };

  const skills = [
    {
      category: "Cloud & Infrastructure",
      items: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "CloudFront", "Route 53", "IAM", "VPC"]
    },
    {
      category: "Languages & Frameworks",
      items: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub Actions", "AWS SAM", "Terraform", "Docker", "CI/CD", "Serverless"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 mt-2">{personalInfo.title}</p>
          </div>

          <div className="h-px bg-gray-200 my-6"></div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-gray-600">
              <Mail size={20} className="mr-2" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Linkedin size={20} className="mr-2" />
              <a
                href={`https://${personalInfo.linkedin}`}
                className="hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.linkedin}
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <Github size={20} className="mr-2" />
              <a
                href={`https://${personalInfo.github}`}
                className="hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.github}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Award size={24} className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center text-gray-700">
              <span className="font-medium">AWS Certified Cloud Practitioner</span>
              <span className="ml-2 text-sm text-gray-500">(Validation Code: XXXX)</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen size={24} className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Calendar size={24} className="mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
              Cloud Resume Challenge
            </h3>
            <p className="text-gray-600 mb-3 text-left">
              Built and deployed a cloud resume using AWS services including:
            </p>

            <ul className="list-disc list-inside text-gray-600 text-left space-y-2">
              <li>Frontend: S3, CloudFront, Route 53</li>
              <li>Backend: API Gateway, Lambda, DynamoDB</li>
              <li>Infrastructure as Code using AWS SAM</li>
              <li>CI/CD pipeline with GitHub Actions</li>
            </ul>

          </div>
        </section>

        <footer className="text-center text-gray-600">
          <p>Visitors: {visitors}</p>
          <p className="mt-2">
            This resume was built using the Cloud Resume Challenge.
            Read about my experience{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>.
          </p>
        </footer>
      </main>
    </div>
  );
}
