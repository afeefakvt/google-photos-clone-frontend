import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface InfoModalProps {
  open: boolean
  onClose: () => void
  metadata: {
    size?: number
    width?: number
    height?: number
    format?:string
    createdAt?: string
  }
}

export default function InfoModal({ open, onClose, metadata }: InfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#202124] text-white border-gray-700">
        <DialogHeader>
          <DialogTitle>Photo Information</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 mt-4 text-sm">
          <p><strong>Size:</strong> {metadata.size ?? "Unknown"}</p>
          <p><strong>Width:</strong> {metadata.width ?? "Unknown"} px</p>
          <p><strong>Height:</strong> {metadata.height ?? "Unknown"} px</p>
          <p><strong>Format:</strong> {metadata.format ?? "Unknown"}</p>
          <p><strong>Uploaded:</strong> {metadata.createdAt ? new Date(metadata.createdAt).toLocaleString() : "Unknown"}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
