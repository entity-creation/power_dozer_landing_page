import { motion } from "framer-motion";
import Header from "./header";
import { Footer } from "./footer";
import { PowerDozerInfo } from "../../data/company";

export const PageWrapper = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="bg-[#eaf0f4]"
    >
      <Header />
      {children}
      <Footer data={PowerDozerInfo}/>
    </motion.div>
  );
};
