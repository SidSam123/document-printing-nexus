
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { IndianRupee } from "lucide-react";
import { useEffect } from "react";

interface RazorpayButtonProps {
  amount?: number;
  buttonText?: string;
  description?: string;
  title?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayButton = ({
  amount = 299,
  buttonText = "Pay Now",
  description = "Securely pay online for your print services",
  title = "Quick Payment"
}: RazorpayButtonProps) => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = "pl_XXXXXXXXXX"; // Replace with your actual payment button ID
    
    // Clean up
    return () => {
      const button = document.getElementById("razorpay-payment-button");
      if (button) {
        button.remove();
      }
    };
  }, []);

  const handlePaymentClick = () => {
    // This would normally open the Razorpay payment modal
    // For demonstration, we'll just show a toast
    toast({
      title: "Payment initiated",
      description: "This would open the Razorpay payment window in a real implementation.",
    });
    
    // In a real implementation, you would use the Razorpay JS SDK to open the payment modal
    // or redirect to a payment page
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Amount:</span>
          <span className="font-semibold flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            {amount}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full flex items-center justify-center gap-2"
          onClick={handlePaymentClick}
        >
          <IndianRupee className="h-4 w-4" />
          {buttonText}
        </Button>
        <div id="razorpay-payment-container"></div>
      </CardFooter>
    </Card>
  );
};

export default RazorpayButton;
