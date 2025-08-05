import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User, Mail, Phone, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useRDStation } from "@/hooks/useRDStation";
import { useToast } from "@/hooks/use-toast";

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutForm = ({ isOpen, onClose }: CheckoutFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { sendLeadToRDStation, isLoading: rdLoading } = useRDStation();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Telefone deve ter 10 ou 11 dígitos";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const sendToMake = async (data: { name: string; email: string; phone: string }) => {
    try {
      const response = await fetch('https://webhook.fiqon.app/webhook/9f8f93dc-2889-457d-a37e-f2923f2b3d8c/abff317d-6231-4e85-8a59-90ae31086134', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: data.name,
          email: data.email,
          telefone: data.phone
        }),
      });
      
      return true;
    } catch (error) {
      console.error("Erro ao enviar para Make:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Enviar lead para Make
      const makeSuccess = await sendToMake({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      // Enviar lead para RD Station
      const rdSuccess = await sendLeadToRDStation({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });

      if (makeSuccess && rdSuccess) {
        toast({
          title: "Lead enviado com sucesso!",
          description: "Seus dados foram enviados para nossos sistemas. Redirecionando para o checkout...",
          duration: 3000,
        });
      } else if (makeSuccess || rdSuccess) {
        toast({
          title: "Parcialmente enviado",
          description: "Alguns dados foram enviados. Redirecionando para o checkout...",
          duration: 3000,
        });
      } else {
        toast({
          title: "Aviso",
          description: "Houve problemas no envio, mas você será redirecionado para o checkout.",
          variant: "destructive",
          duration: 3000,
        });
      }

      // Aguardar um pouco para mostrar o toast
      setTimeout(() => {
        // Redirecionar para o checkout
        window.location.href = 'https://pay.kiwify.com.br/bEFfAOX';
        onClose();
        // Reset form
        setFormData({ name: "", email: "", phone: "" });
      }, 1500);

    } catch (error) {
      console.error("Erro no envio:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro, mas você será redirecionado para o checkout.",
        variant: "destructive",
      });
      
      // Mesmo com erro, redirecionar para o checkout
      setTimeout(() => {
        window.location.href = 'https://pay.kiwify.com.br/bEFfAOX';
        onClose();
        setFormData({ name: "", email: "", phone: "" });
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 border border-primary/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-2 text-white">
            Quase lá! <span className="text-primary">Finalize sua inscrição</span>
          </DialogTitle>
          <p className="text-sm sm:text-base text-white/80 text-center">
            Preencha seus dados para acessar o checkout e garantir sua vaga
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2 text-white">
              <User className="w-4 h-4" />
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`h-11 bg-black/50 border-white/20 text-white placeholder:text-white/50 ${errors.name ? 'border-destructive' : ''}`}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-white">
              <Mail className="w-4 h-4" />
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`h-11 bg-black/50 border-white/20 text-white placeholder:text-white/50 ${errors.email ? 'border-destructive' : ''}`}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" />
              Telefone/WhatsApp
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formatPhone(formData.phone)}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`h-11 bg-black/50 border-white/20 text-white placeholder:text-white/50 ${errors.phone ? 'border-destructive' : ''}`}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting || rdLoading}
              className="w-full bg-primary hover:bg-primary/90 text-black font-bold h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting || rdLoading ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2 animate-spin" />
                  ENVIANDO DADOS...
                </>
              ) : (
                <>
                  ACESSAR CHECKOUT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>

        <p className="text-xs text-white/60 text-center mt-4">
          Seus dados estão protegidos e não serão compartilhados
        </p>
      </DialogContent>
    </Dialog>
  );
};
