import { useState } from "react";

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

interface RDStationConfig {
  token: string;
}

export const useRDStation = () => {
  const [isLoading, setIsLoading] = useState(false);

  // RD Station CRM API (endpoint correto)
  const RD_STATION_TOKEN = "688d29e6b15e7d001d5f39a3";
  const RD_STATION_CRM_URL = "https://plugcrm.net/api/v1/contacts";

  const sendLeadToRDStation = async (leadData: LeadData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Payload para RD Station CRM (formato v1)
      const payload = {
        contact: {
          name: leadData.name,
          emails: [
            {
              email: leadData.email,
              type: "work"
            }
          ],
          phones: [
            {
              phone: leadData.phone,
              type: "cellphone"
            }
          ],
          cf_source: "Site Luz Câmera e Vendas",
          tags: [
            {
              name: "luz-camera-vendas"
            },
            {
              name: "evento-setembro-2025"
            }
          ]
        }
      };

      console.log("Enviando lead para RD Station CRM:", payload);

      const response = await fetch(`${RD_STATION_CRM_URL}?token=${RD_STATION_TOKEN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Erro RD Station CRM:", response.status, errorData);
        throw new Error(`RD Station CRM API Error: ${response.status} - ${errorData}`);
      }

      const result = await response.json();
      console.log("Lead enviado com sucesso para RD Station CRM:", result);
      
      return true;
    } catch (error) {
      console.error("Erro ao enviar lead para RD Station CRM:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendLeadToRDStation,
    isLoading
  };
};