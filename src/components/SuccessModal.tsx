import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal = ({ open, onOpenChange }: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <div className="flex flex-col items-center gap-4 py-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p className="text-muted-foreground text-base">
            Your request has been submitted successfully. Our team will contact you shortly.
          </p>
          <Button onClick={() => onOpenChange(false)} className="mt-2">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
