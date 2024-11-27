import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    (<ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          (<Toast key={id} {...props} className="bg-[#7FD5A2]">
            <div className="grid gap-1 space-grotesk">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none"/>
          </Toast>)
        );
      })}
      <ToastViewport />
    </ToastProvider>)
  );
}
