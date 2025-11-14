import { Bot, X } from "lucide-react"
import ChatBot from "./ChatBot"
import { useState } from "react"

const AgentButton = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-center fixed bottom-[20px] right-0 lg:right-[50px] z-[1000]">
        <div className="w-[85%] lg:w-full flex flex-col items-end">
        {isOpen && (
            <ChatBot />
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer mt-5 flex-shrink-0 size-[55px] rounded-full bg-primary-green flex items-center justify-center border-[3px] border-white shadow-[0_5px_10px_0_rgba(0,0,0,0.12)]">
            {isOpen ? (
                <X className="size-7 text-white" />
            ) : (
                <Bot className="size-7 text-white" />
            )}
        </button>
        </div>
      </div>
  )
}

export default AgentButton