import { motion } from "framer-motion";
export function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"></div>
    </motion.div>
  );
}
