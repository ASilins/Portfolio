import { motion } from "framer-motion";

function PageTransition(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {props.children}
        </motion.div>
    )
};

export default PageTransition;