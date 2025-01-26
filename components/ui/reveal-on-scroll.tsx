import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const RevealOnScroll = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode
	delay?: number
}) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}

export { RevealOnScroll }
