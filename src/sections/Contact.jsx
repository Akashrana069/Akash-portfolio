import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "akashrjput69@gmail.com",
    href: "mailto:akashrjput69@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8219300395",
    href: "tel:+918219300395",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Himachal Pradesh, India",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID;

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <p className="text-muted-foreground mt-4">
            Let's work together 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="glass p-8 rounded-3xl">

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div>
                <label className="block mb-2">
                  Name
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2">
                  Email
                </label>

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                />
              </div>

              {/* BUTTON */}
              <Button
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* SUCCESS / ERROR */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type ===
                  "success" ? (
                    <CheckCircle />
                  ) : (
                    <AlertCircle />
                  )}

                  <p>
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="glass p-8 rounded-3xl">

              <h3 className="text-2xl font-bold mb-6">
                Contact Info
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>

                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <div className="glass p-8 rounded-3xl">

              <h3 className="text-xl font-bold mb-4">
                Social Links
              </h3>

              <div className="flex gap-4">

                <a href="#">
                  <Github />
                </a>

                <a href="#">
                  <Linkedin />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};