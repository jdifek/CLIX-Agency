"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle, User } from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  project: string;
}

export default function AdminPanel() {
  const [clients, setClients] = useState<Client[]>([]);
  const [newClient, setNewClient] = useState({ name: "", email: "", project: "" });
  const { toast } = useToast();

  const handleAddClient = () => {
    if (!newClient.name || !newClient.email || !newClient.project) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setClients([
      ...clients,
      {
        id: Date.now(),
        ...newClient,
      },
    ]);
    setNewClient({ name: "", email: "", project: "" });
    toast({
      title: "Success",
      description: "Client added successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Client</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Input
              placeholder="Client Name"
              value={newClient.name}
              onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
            />
            <Input
              placeholder="Project Description"
              value={newClient.project}
              onChange={(e) => setNewClient({ ...newClient, project: e.target.value })}
            />
            <Button onClick={handleAddClient}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Client
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.email}</p>
                  <p className="text-sm mt-1">{client.project}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}