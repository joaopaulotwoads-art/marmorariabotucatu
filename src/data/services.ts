export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  features: string[];
  materials: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    title: "Cozinhas Planejadas em Mármore e Granito",
    slug: "cozinhas-planejadas",
    description: "Bancadas e ilhas com acabamento premium e alta resistência.",
    longDescription:
      "Transforme sua cozinha em um espaço sofisticado e funcional com nossas bancadas em mármore e granito. Trabalhamos com as melhores pedras do mercado para criar superfícies que combinam beleza natural com durabilidade excepcional. Cada projeto é desenvolvido sob medida, respeitando as dimensões do seu espaço e suas necessidades de uso diário. Do corte preciso ao acabamento final, garantimos qualidade incomparável em cada detalhe.",
    image: "/images/services/cozinha.webp",
    alt: "Cozinha planejada com bancada de mármore e granito - Marmoraria Botucatu SP",
    features: [
      "Bancadas sob medida com precisão milimétrica",
      "Ilhas centrais com acabamento waterfall",
      "Revestimento de paredes e backsplash",
      "Acabamento em diferentes tipos de borda",
      "Furação para cooktop e cuba inclusa",
    ],
    materials: ["Granito Preto São Gabriel", "Mármore Branco Carrara", "Granito Branco Dallas", "Quartzito Taj Mahal"],
    metaTitle: "Cozinhas Planejadas em Mármore e Granito | Marmoraria Botucatu",
    metaDescription:
      "Bancadas de cozinha em mármore e granito em Botucatu, SP. Ilhas sob medida com acabamento premium. Orçamento!",
  },
  {
    title: "Pias e Lavabos Sob Medida",
    slug: "pias-e-lavabos",
    description: "Design exclusivo para banheiros e lavabos com pedras nobres.",
    longDescription:
      "Eleve o design do seu banheiro ou lavabo com pias e bancadas em pedras naturais selecionadas. Criamos peças exclusivas que combinam funcionalidade com elegância, transformando cada ambiente em um espaço de sofisticação. Trabalhamos com uma ampla variedade de pedras nobres, desde mármores clássicos até granitos exóticos, sempre com acabamento impecável e instalação profissional.",
    image: "/images/services/pia-lavabo.webp",
    alt: "Pia de lavabo sob medida em pedra natural - Marmoraria Botucatu SP",
    features: [
      "Bancadas de banheiro com cuba esculpida",
      "Lavabos com design exclusivo",
      "Tampos com furação sob medida",
      "Saiote e testeira personalizados",
      "Acabamento polido, levigado ou acetinado",
    ],
    materials: ["Mármore Branco Piguês", "Granito Preto Absoluto", "Nanoglass", "Mármore Travertino"],
    metaTitle: "Pias e Lavabos Sob Medida em Pedra Natural | Marmoraria Botucatu",
    metaDescription:
      "Pias e lavabos sob medida em mármore e granito em Botucatu, SP. Design exclusivo com pedras nobres. Orçamento!",
  },
  {
    title: "Nichos e Cubas Esculpidas",
    slug: "nichos-e-cubas",
    description: "A sofisticação da pedra esculpida para nichos e pias sem emendas visíveis.",
    longDescription:
      "Nossos nichos e cubas esculpidas representam o mais alto nível de sofisticação em acabamento com pedras naturais. Utilizando técnicas avançadas de escultura em pedra, criamos peças monolíticas onde nicho e bancada se integram perfeitamente, sem emendas visíveis. O resultado é uma estética limpa e contemporânea que valoriza cada ambiente com a beleza intemporal da pedra natural.",
    image: "/images/services/nichos.webp",
    alt: "Nicho e cuba esculpida em mármore - Marmoraria Botucatu SP",
    features: [
      "Cubas esculpidas na própria pedra",
      "Nichos integrados sem emendas",
      "Peças monolíticas sob medida",
      "Acabamento interno impermeabilizado",
      "Design clean e contemporâneo",
    ],
    materials: ["Mármore Branco Carrara", "Limestone", "Mármore Crema Marfil", "Quartzito Branco"],
    metaTitle: "Nichos e Cubas Esculpidas em Pedra | Marmoraria Botucatu",
    metaDescription:
      "Nichos e cubas esculpidas em mármore em Botucatu, SP. Peças monolíticas sem emendas. Acabamento premium!",
  },
  {
    title: "Ilhas Gourmet em Pedra Natural",
    slug: "ilhas-gourmet",
    description: "O melhor acabamento para churrasqueiras e balcões externos.",
    longDescription:
      "Transforme sua área gourmet em um espaço de alto padrão com nossas bancadas e ilhas em pedra natural. Projetadas para resistir às condições externas e ao uso intenso, nossas peças combinam robustez com elegância. Trabalhamos com granitos e pedras naturais especialmente selecionados para áreas de churrasqueira, balcões e espaços de convivência ao ar livre.",
    image: "/images/services/ilha-gourmet.webp",
    alt: "Ilha gourmet com bancada em pedra natural - Marmoraria Botucatu SP",
    features: [
      "Bancadas para churrasqueira e cooktop",
      "Balcões de apoio com cuba integrada",
      "Revestimento de lareiras e fornos",
      "Pedras resistentes a calor e umidade",
      "Acabamento antideslizante para áreas externas",
    ],
    materials: ["Granito Preto São Gabriel", "Granito Verde Ubatuba", "Quartzito Mont Blanc", "Granito Amarelo Ornamental"],
    metaTitle: "Ilhas Gourmet em Pedra Natural | Marmoraria Botucatu",
    metaDescription:
      "Ilhas gourmet e bancadas para churrasqueira em pedra natural em Botucatu, SP. Acabamento premium. Orçamento!",
  },
  {
    title: "Escadas e Soleiras",
    slug: "escadas-e-soleiras",
    description: "Escadas revestidas e soleiras que trazem unidade visual ao projeto.",
    longDescription:
      "Escadas e soleiras em pedra natural conferem sofisticação e unidade visual a qualquer projeto arquitetônico. Nosso trabalho especializado garante cortes precisos, encaixes perfeitos e acabamento antiderrapante para total segurança. Oferecemos uma ampla variedade de pedras e acabamentos para que cada escada e soleira se integrem harmoniosamente ao design do seu espaço.",
    image: "/images/services/escada.webp",
    alt: "Escada revestida em mármore com soleira - Marmoraria Botucatu SP",
    features: [
      "Degraus com acabamento antiderrapante",
      "Soleiras em diversos tipos de pedra",
      "Peitoris e pingadeiras",
      "Rodapés coordenados",
      "Instalação com nivelamento perfeito",
    ],
    materials: ["Granito Preto São Gabriel", "Mármore Branco", "Granito Cinza Andorinha", "Granito Marrom Imperial"],
    metaTitle: "Escadas e Soleiras em Pedra Natural | Marmoraria Botucatu",
    metaDescription:
      "Escadas revestidas e soleiras em mármore e granito em Botucatu, SP. Acabamento antiderrapante. Orçamento!",
  },
  {
    title: "Serviços em Porcelanato Técnico",
    slug: "porcelanato-tecnico",
    description: "Cortes especiais e bancadas em porcelanato de grandes formatos.",
    longDescription:
      "Especializados em trabalhar com porcelanatos de grandes formatos, oferecemos cortes técnicos de alta precisão para bancadas, revestimentos e acabamentos. O porcelanato técnico combina a beleza das pedras naturais com praticidade e custo-benefício, sendo uma excelente opção para quem busca sofisticação com menor necessidade de manutenção. Nossos equipamentos de ponta garantem cortes perfeitos mesmo nas peças de maiores dimensões.",
    image: "/images/services/porcelanato.webp",
    alt: "Bancada em porcelanato técnico de grande formato - Marmoraria Botucatu SP",
    features: [
      "Cortes em porcelanato de grande formato",
      "Bancadas com acabamento de borda diferenciado",
      "Revestimento de paredes e pisos",
      "Acabamento que imita pedras naturais",
      "Menor necessidade de manutenção",
    ],
    materials: ["Porcelanato Calacatta", "Porcelanato Statuario", "Porcelanato Marquina", "Porcelanato Sahara Noir"],
    metaTitle: "Porcelanato Técnico - Cortes e Bancadas | Marmoraria Botucatu",
    metaDescription:
      "Porcelanato técnico em Botucatu, SP. Cortes especiais e bancadas em grandes formatos. Orçamento gratuito!",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): Service[] {
  return services.filter((s) => s.slug !== currentSlug);
}
