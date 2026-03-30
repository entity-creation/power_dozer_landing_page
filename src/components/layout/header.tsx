import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import {
  FaInfoCircle,
  FaTools,
  FaTruck,
  FaHardHat,
  FaFlask,
  FaCertificate,
} from "react-icons/fa";

const aboutMenu = [
  { name: "Summary", path: "/about_summary", icon: FaInfoCircle },
  { name: "Core Values", path: "/core_values", icon: FaInfoCircle },
  { name: "Mission and Vision", path: "/mission_vision", icon: FaInfoCircle },
  { name: "Strategy", path: "/strategy", icon: FaInfoCircle },

];

const servicesMenu = [
  { name: "Summary", path: "/#services", icon: FaTools },
  { name: "Procurement", path: "/services/procurement", icon: FaTruck },
  { name: "Construction", path: "/services/construction", icon: FaHardHat },
  { name: "Gases", path: "/services/gases", icon: FaFlask },
];

const certMenu = [
  { name: "Summary", path: "/#certifications", icon: FaCertificate },
  { name: "CAC", path: "/certifications/cac", icon: FaCertificate },
  { name: "NMDPRA", path: "/certifications/nmdpra", icon: FaCertificate },
];

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <>
      <div className="w-full z-50">
        <div
          className="py-10 px-10 fixed top-0 right-0 flex flex-col md:hidden justify-end items-end"
          id="mobile"
        >
          <div
            className="text-black hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu />
          </div>
          <div
            className={`transition-all duration-200 ease-out transform rounded-md shadow-gray-400 shadow-md p-5 mt-5 ${menuOpen ? "flex flex-col bg-white pointer-events-auto opacity-100 translate-y-0" : "invisible pointer-events-none opacity-0 -translate-y-3"}`}
          >
            <div
              className="flex-3 text-2xl font-bold hover-sm text-gray-600 pb-3"
              onClick={() => navigate("/")}
            >
              <img className="h-20" src="/images/dozerLogo.png" alt="" />
            </div>
            <div className="text-gray-600 pb-3">
              <div
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
              >
                About
              </div>

              {openDropdown === "about" && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {aboutMenu.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.path)}>
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-gray-600 pb-3">
              <div
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services",
                  )
                }
              >
                Services
              </div>

              {openDropdown === "services" && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {servicesMenu.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.path)}>
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-gray-600 pb-3">
              <div
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "certifications" ? null : "certifications",
                  )
                }
              >
                Certifications
              </div>

              {openDropdown === "certifications" && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {certMenu.map((item, index) => (
                    <div key={index} onClick={() => navigate(item.path)}>
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="flex-1 text-gray-600 hover-sm pb-3"
              onClick={() => navigate("/#clients")}
            >
              Clients
            </div>
            <div
              className="flex-1 text-gray-600 hover-sm pb-3"
              onClick={() => navigate("/#contact")}
            >
              Contact Us
            </div>
            <div className="flex-2"></div>
          </div>
        </div>
        <div
          className="flex space-x-15 bg-white text-black max-md:hidden items-center cursor-pointer"
          id="pc"
        >
          <div
            className="flex-3 text-2xl font-bold hover-sm text-gray-600"
            onClick={() => navigate("/")}
          >
            <img
              className="h-20 object-cover"
              src="/images/dozerLogo.png"
              alt=""
            />
          </div>
          <div className="relative group flex-1 text-center">
            <div className="text-gray-600 hover-sm text-[min(10vw,15px)]">
              About
            </div>

            <div
              className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-200 z-50"
            >
              {aboutMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    onClick={() => navigate(item.path)}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative group flex-1 text-center">
            <div className="text-gray-600 hover-sm text-[min(10vw,15px)]">
              Services
            </div>

            <div
              className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-200 z-50"
            >
              {servicesMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    onClick={() => navigate(item.path)}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative group flex-1 text-center">
            <div className="text-gray-600 hover-sm text-[min(10vw,15px)]">
              Certifications
            </div>

            <div
              className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md 
  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
  transition-all duration-200 z-50"
            >
              {certMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    onClick={() => navigate(item.path)}
                  >
                    <Icon />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="flex-1 text-gray-600 hover-sm text-center text-[min(10vw,15px)]"
            onClick={() => navigate("/#clients")}
          >
            Clients
          </div>
          <div
            className="flex-1 text-gray-600 hover-sm text-center text-[min(10vw,15px)]"
            onClick={() => navigate("/#contact")}
          >
            Contact Us
          </div>
          <div className="flex-2"></div>
        </div>
      </div>
    </>
  );
}
