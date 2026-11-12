/** Datos públicos confirmados y referencias pendientes, separados de la presentación. */
export type Verification = 'confirmado_en_referencias' | 'pendiente_de_verificar';
export type Channel = { address: string; appearedUnder: string; status: Verification; publish: boolean };

export const company = {
  name: 'ASM Inc.',
  expanded: 'Advanced System Managers',
  message: 'Tecnología pensada para seguir adelante.',
  // La relación entre buzones y departamentos es contradictoria en las capturas.
  contactChannels: [
    { address: 'asmempleo@gmail.com', appearedUnder: 'Solicitar reparaciones', status: 'pendiente_de_verificar', publish: false },
    { address: 'asmcontacto@gmail.com', appearedUnder: 'Solicitud de empleo', status: 'pendiente_de_verificar', publish: false },
  ] satisfies Channel[],
  phone: null,
  physicalAddress: null,
  socials: [] as string[],
  confirmedOffer: ['Soluciones informáticas integrales', 'Software: VPN y antivirus', 'Hardware: interiores, exteriores y seguridad', 'Consultas sobre licencias'],
};

export const nav = [
  { label:'Inicio', href:'' },
  { label:'Soluciones', href:'soluciones/' },
  { label:'Licencias', href:'licencias/' },
  { label:'Sobre ASM', href:'sobre-asm/' },
  { label:'Empleo', href:'trabaja-con-nosotros/' },
  { label:'Contacto', href:'contacto/' },
];

export const solutionMenu = [
  { label:'Visión general', href:'soluciones/', number:'00' },
  { label:'Software', href:'soluciones/software/', number:'01' },
  { label:'Hardware', href:'soluciones/hardware/', number:'02' },
  { label:'Interiores', href:'soluciones/hardware/interiores/', number:'02.1' },
  { label:'Exteriores', href:'soluciones/hardware/exteriores/', number:'02.2' },
  { label:'Seguridad', href:'soluciones/hardware/seguridad/', number:'02.3' },
];

export const pages = [
  { route:'', title:'ASM Inc. | Soluciones informáticas para empresas', description:'Conoce ASM Inc. y su enfoque en infraestructura, software, seguridad y tecnología adaptada a las necesidades de cada negocio.' },
  { route:'soluciones/', title:'Soluciones informáticas | ASM Inc.', description:'Explora las áreas de tecnología empresarial de ASM: software, hardware y consultas sobre licencias.' },
  { route:'soluciones/software/', title:'Software: VPN y antivirus | ASM Inc.', description:'Soluciones de software para conectividad privada y protección de dispositivos. Conoce las áreas de VPN y antivirus de ASM.' },
  { route:'soluciones/hardware/', title:'Hardware empresarial | ASM Inc.', description:'Descubre las categorías de hardware de ASM: interiores, exteriores y seguridad, con un enfoque en infraestructura tecnológica.' },
  { route:'soluciones/hardware/interiores/', title:'Hardware para interiores | ASM Inc.', description:'Racks, servidores, switches y routers como referencias de equipamiento interior en el catálogo visual de ASM.' },
  { route:'soluciones/hardware/exteriores/', title:'Hardware para exteriores | ASM Inc.', description:'Conoce el área de equipamiento tecnológico para exteriores de ASM y cómo plantear una consulta técnica.' },
  { route:'soluciones/hardware/seguridad/', title:'Hardware de seguridad | ASM Inc.', description:'Explora el área de hardware de seguridad de ASM y los aspectos a definir antes de una propuesta.' },
  { route:'licencias/', title:'Consultas sobre licencias | ASM Inc.', description:'Identifica tus necesidades de licencias de software y prepara la información necesaria para consultar a ASM.' },
  { route:'sobre-asm/', title:'Sobre ASM Inc. | Advanced System Managers', description:'Descubre la misión y visión de ASM: soluciones informáticas integrales para reducir barreras técnicas y facilitar el crecimiento.' },
  { route:'contacto/', title:'Contacto | ASM Inc.', description:'Conoce las vías de consulta de ASM y la información útil para plantear un proyecto de infraestructura o software.' },
  { route:'trabaja-con-nosotros/', title:'Trabaja con nosotros | ASM Inc.', description:'Descubre el apartado de empleo de ASM Inc. e información sobre las solicitudes profesionales.' },
] as const;
