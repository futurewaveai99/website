import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Briefcase } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface BookingFormData {
  name: string;
  email: string;
  service: string;
  date: Date;
  time: string;
}

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const services = [
  { value: 'chatbots', label: 'AI Chatbots' },
  { value: 'voice-agents', label: 'AI Voice Calling Agents' },
  { value: 'website', label: 'Website Development' },
  { value: 'ai-ads', label: 'AI Product Ads' },
  { value: 'ugc-ads', label: 'AI UGC Ads' }
];

const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    if (!selectedDate || !selectedTime || !selectedService) {
      return;
    }

    // Format the date and time for Google Calendar
    const startDate = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    startDate.setHours(parseInt(hours), parseInt(minutes));
    
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // 1 hour duration

    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const selectedServiceLabel = services.find(s => s.value === selectedService)?.label || selectedService;

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Consultation with ${data.name}`)}&dates=${formatDateForCalendar(startDate)}/${formatDateForCalendar(endDate)}&details=${encodeURIComponent(`Service: ${selectedServiceLabel}\nClient: ${data.name}\nEmail: ${data.email}`)}&location=Online%20Meeting`;

    window.open(calendarUrl, '_blank');
    
    // Reset form and close modal
    reset();
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedService(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-glass border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
            Book Your Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="flex items-center text-sm font-medium mb-2">
              <User className="w-4 h-4 mr-2 text-primary" />
              Full Name
            </Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your full name"
              className="bg-background/50 border-primary/20 focus:border-primary/50"
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="flex items-center text-sm font-medium mb-2">
              <User className="w-4 h-4 mr-2 text-primary" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter your email"
              className="bg-background/50 border-primary/20 focus:border-primary/50"
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Service Selection */}
          <div>
            <Label className="flex items-center text-sm font-medium mb-2">
              <Briefcase className="w-4 h-4 mr-2 text-primary" />
              Service Interest
            </Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary/50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-background border-primary/20">
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div>
            <Label className="flex items-center text-sm font-medium mb-2">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Select Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background/50 border-primary/20 hover:bg-primary/10 hover:border-primary/50",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background border-primary/20" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div>
            <Label className="flex items-center text-sm font-medium mb-2">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              Select Time
            </Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary/50">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent className="bg-background border-primary/20">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time} - {String(parseInt(time.split(':')[0]) + 1).padStart(2, '0')}:00
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 py-6 h-auto"
            disabled={!selectedDate || !selectedTime || !selectedService}
          >
            Book Appointment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;