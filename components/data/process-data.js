// ============================================================================
// PROCESS DATA
// ============================================================================
// Configuration for the work process steps
// To modify the process:
// 1. Import new icons from lucide-react if needed
// 2. Edit the processSteps array below
// 3. The changes will automatically appear on the process section
// ============================================================================

import { Lightbulb, Target, Code, CheckCircle, Rocket } from "lucide-react"

export const processSteps = [
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Discovery",
    description: "We understand your vision and requirements",
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Strategy",
    description: "We create a tailored roadmap for success",
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Development",
    description: "We build with precision and innovation",
  },
  {
    icon: <CheckCircle className="w-12 h-12" />,
    title: "Testing",
    description: "We ensure quality and performance",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Launch",
    description: "We deploy and support your success",
  },
]
