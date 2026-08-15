export interface GlossaryTopic {
  id: string;
  category: 'PRINCIPIO FUNDAMENTAL' | 'CONCEPTO CLÍNICO' | 'MARCO LEGAL Y DEONTOLÓGICO';
  title: string;
  shortSummary: string;
  detailedText: string;
  clinicalExample: string;
  keyRule: string;
}

export const BIOETHICS_GLOSSARY: GlossaryTopic[] = [
  {
    id: 'autonomia',
    category: 'PRINCIPIO FUNDAMENTAL',
    title: 'Principio de Autonomía',
    shortSummary: 'El derecho inalienable del paciente a tomar decisiones informadas sobre su propio cuerpo y salud.',
    detailedText: 'Formulado canónicamente por Tom Beauchamp y James Childress (1979), exige reconocer el autogobierno de las personas dotadas de capacidad de decisión. Implica que toda intervención médica debe fundamentarse en la libre elección del paciente, tras recibir información adecuada, veraz y comprensible, sin coerción, manipulación ni engaño.',
    clinicalExample: 'Un paciente competente diagnosticado con cáncer avanzado decide rechazar una quimioterapia de tercera línea tras comprender el pronóstico y prefiere centrarse en calidad de vida con cuidados paliativos.',
    keyRule: 'La voluntad del paciente competente prevalece sobre los deseos de su familia y sobre las preferencias paternalistas del equipo médico.'
  },
  {
    id: 'beneficencia',
    category: 'PRINCIPIO FUNDAMENTAL',
    title: 'Principio de Beneficencia',
    shortSummary: 'La obligación moral del profesional sanitario de actuar siempre en el mejor interés y beneficio del paciente.',
    detailedText: 'Consiste en prevenir el daño, eliminar el sufrimiento y promover el bienestar integral del enfermo. A diferencia de la época hipocrática tradicional (donde el médico decidía unilateralmente lo que era "bueno"), en la bioética moderna la beneficencia debe armonizarse siempre con la autonomía del paciente (beneficencia no paternalista).',
    clinicalExample: 'Proponer la mejor terapia basada en la evidencia científica disponible, aliviando el dolor mediante analgesia adecuada y ofreciendo apoyo interdisciplinar y humano.',
    keyRule: 'Hacer el bien no autoriza a imponerlo contra la voluntad explícita de un individuo competente.'
  },
  {
    id: 'no_maleficencia',
    category: 'PRINCIPIO FUNDAMENTAL',
    title: 'Principio de No Maleficencia (Primum Non Nocere)',
    shortSummary: 'La prohibición absoluta de infligir daño intencionado o someter al paciente a riesgos desproporcionados.',
    detailedText: 'Es el principio ético de mayor rango normativo primario. Obliga al médico a no dañar, a evitar la negligencia, la impericia y el ensañamiento terapéutico (u obstinación médica). Todo procedimiento invasivo debe tener una justificación clínica proporcional donde los beneficios superen con claridad a los daños previsibles.',
    clinicalExample: 'Evitar maniobras de reanimación cardiopulmonar invasivas o intubación traqueal fútil en un paciente en agonía irreversible donde el procedimiento solo prolongaría el sufrimiento.',
    keyRule: 'Primum non nocere: antes que curar a cualquier costo, es deber no provocar un mal mayor ni futilidad biológica.'
  },
  {
    id: 'justicia',
    category: 'PRINCIPIO FUNDAMENTAL',
    title: 'Principio de Justicia Distributiva',
    shortSummary: 'La distribución equitativa de las cargas, beneficios y recursos sanitarios escasos sin discriminación.',
    detailedText: 'Establece que todas las personas en iguales condiciones clínicas deben recibir el mismo nivel de atención y consideración moral. Prohíbe cualquier discriminación basada en edad, condición socioeconómica, etnia, religión o influencia social. En situaciones de recursos críticos (UCI, trasplantes), los criterios deben basarse en necesidad clínica, pronóstico objetivo y probabilidad de beneficio médico.',
    clinicalExample: 'Asignar una cama de cuidados intensivos o un órgano en lista de espera aplicando criterios de gravedad y supervivencia esperada estandarizados, no por influencias políticas ni orden de llegada aleatorio.',
    keyRule: 'Tratar a los iguales de manera igual y a los desiguales según sus necesidades clínicas objetivas.'
  },
  {
    id: 'consentimiento_informado',
    category: 'CONCEPTO CLÍNICO',
    title: 'Consentimiento Informado',
    shortSummary: 'Proceso dialógico gradual mediante el cual el paciente autoriza o rechaza una actuación diagnóstica o terapéutica.',
    detailedText: 'No es un mero formulario de exención legal, sino un acto clínico de comunicación. Requiere tres pilares indispensables: 1) Voluntariedad (sin coacción externa), 2) Información adecuada (diagnóstico, alternativas, riesgos frecuentes y graves, beneficios esperados) y 3) Comprensión y capacidad para decidir.',
    clinicalExample: 'Explicar con lenguaje claro a un paciente los riesgos quirúrgicos específicos, resolver sus dudas y darle tiempo para consultar y firmar sin apuros ni presiones.',
    keyRule: 'El consentimiento es un proceso continuo que puede ser revocado libremente en cualquier momento por el paciente.'
  },
  {
    id: 'confidencialidad',
    category: 'CONCEPTO CLÍNICO',
    title: 'Confidencialidad y Secreto Médico',
    shortSummary: 'El deber ético y legal de resguardar todos los datos íntimos y clínicos revelados por el paciente.',
    detailedText: 'Fundamento esencial de la confianza en la relación médico-paciente. Solo puede levantarse en circunstancias excepcionales previstas deontológicamente: 1) Consentimiento expreso del paciente, 2) Riesgo inminente y grave para la vida de terceros inocentes, 3) Notificación obligatoria de enfermedades epidemiológicas bajo marco legal estricto, o 4) Requerimiento judicial legítimo.',
    clinicalExample: 'Negarse a entregar resultados clínicos a la empresa, cónyuge o familiares de un paciente adulto sin la autorización explícita y documentada de este.',
    keyRule: 'La información del paciente le pertenece al paciente; el médico es únicamente su custodio profesional.'
  },
  {
    id: 'menor_maduro',
    category: 'CONCEPTO CLÍNICO',
    title: 'Doctrina del Menor Maduro',
    shortSummary: 'Reconocimiento progresivo de la capacidad de decisión en adolescentes con madurez intelectual y emocional suficiente.',
    detailedText: 'En bioética médica contemporánea, la capacidad no es un interruptor binario que se enciende a los 18 años, sino una facultad evolutiva. Un menor con suficiente juicio crítico tiene derecho a ser escuchado, a recibir información adaptada y, en decisiones de su esfera íntima o tratamientos no destructivos, a que su criterio sea respetado de manera prioritaria.',
    clinicalExample: 'Una joven de 16 años que solicita asesoría anticonceptiva confidencial o un tratamiento médico con comprensión plena de las implicaciones.',
    keyRule: 'Evaluar siempre la capacidad real de entendimiento y valorar el mejor interés del menor junto con su progresiva autonomía.'
  },
  {
    id: 'voluntades_anticipadas',
    category: 'MARCO LEGAL Y DEONTOLÓGICO',
    title: 'Directrices Previas / Voluntades Anticipadas',
    shortSummary: 'Documento donde una persona capaz plasma sus deseos y límites sobre tratamientos futuros en caso de incapacidad sobrevenida.',
    detailedText: 'Permiten proyectar la autonomía hacia el futuro cuando el paciente pierda el conocimiento o la competencia (demencia, coma, fase agónica). El equipo médico tiene el deber ético de consultar y respetar estas directrices, prevaleciendo sobre opiniones contradictorias de familiares que no ostenten representación formal conforme a dicha voluntad.',
    clinicalExample: 'Un paciente que dejó documentado expresamente su rechazo a ventilación mecánica prolongada en caso de daño cerebral anóxico irreversible.',
    keyRule: 'Las voluntades válidamente otorgadas son la voz del paciente cuando este ya no puede hablar.'
  }
];
