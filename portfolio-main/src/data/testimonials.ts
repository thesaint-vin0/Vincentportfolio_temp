export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah joy',
    role: 'Product Manager',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'Vincent transformed our product UI from functional to breathtaking. The attention to micro-interactions and performance is unmatched. Our engagement metrics jumped 40% after the redesign.',
  },
  {
    id: 2,
    name: 'Kazeem Nifemi',
    role: 'sales manager, Vast Nation Commerce',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'Working with Vincent felt like having a co-founder who happens to be an exceptional engineer. The 3D product viewer he built drove a 34% lift in conversions. Genuinely world-class work.',
  },
  {
    id: 3,
    name: 'Favour Igbanibo',
    role: 'Creative Director',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'I have never seen someone translate a design vision so faithfully into code. The WebGL transitions were flawless.',
  },
  {
    id: 4,
    name: 'David Okafor',
    role: 'product designer',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    quote:
      'Vincent shipped faster than anyone on the team while keeping quality bar impossibly high. Every site he touched scored 95+ on Lighthouse. A rare combination of speed and craft.',
  },
  {
    id: 5,
    name: 'Priya Sharma',
    role: 'CEO, nastarss Dev',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote:
      'Our new website doubled inbound leads within two months. Vincent understood our business, not just our design brief. Professional, responsive, and wildly talented.',
  },
];
