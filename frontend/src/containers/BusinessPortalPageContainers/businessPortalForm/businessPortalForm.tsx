/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CardContent, Input } from "@mui/material";
import { useState } from "react";

const BusinessPortalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    service: "",
    coupons: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // call api here with the formData
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 p-6 shadow-lg rounded-[30] opacity-80" style={{ borderRadius: "30px" }}>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <label htmlFor="name" className="min-w-[140px]">Organization Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div  className="flex gap-4">
            <label htmlFor="type" className="min-w-[140px]">Organization Type</label>
            <Input
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div  className="flex gap-4">
            <label htmlFor="service" className="min-w-[140px]">Service Offered</label>
            <Input
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            />
          </div>

          <div  className="flex gap-4">
            <label htmlFor="coupons" className="min-w-[140px]">Count of Coupons</label>
            <Input
              id="coupons"
              name="coupons"
              type="number"
              value={formData.coupons}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="description" className="min-w-[140px]">Description</label>
            <textarea
                className="flex-1 border-1 border-gray-300 rounded-md"
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-green-700 text-white">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


export { BusinessPortalForm };