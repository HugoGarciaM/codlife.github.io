import { ClinicalCase } from '../types';

export const CLINICAL_CASES: ClinicalCase[] = [
  // ==========================================
  // NIVEL 1 — FUNDAMENTOS BIOÉTICOS
  // ==========================================
  {
    id: 1,
    level: 1,
    levelName: 'NIVEL 1 — FUNDAMENTOS',
    title: 'Caso 01: Consentimiento Informado en Urgencias',
    subtitle: 'El valor del proceso dialógico antes de una intervención quirúrgica',
    patient: {
      name: 'Carlos Mendoza',
      age: 48,
      diagnosis: 'Apendicitis aguda no complicada',
      location: 'Urgencias — Cama 04',
      vitalsStatus: 'Estable',
      avatarType: 'carlos_trauma'
    },
    setting: 'emergency',
    settingName: 'Servicio de Urgencias Generales',
    clinicalContext: 'Carlos ingresa con dolor abdominal agudo en fosa ilíaca derecha de 18 horas de evolución. La ecografía confirma apendicitis aguda. El cirujano de guardia está apresurado porque tiene tres quirófanos en espera y le entrega a Carlos una hoja de consentimiento estándar diciéndole: "Firme aquí rápido para meterlo al quirófano antes del cambio de turno". Carlos está visiblemente asustado y te dice que no comprende los riesgos, anestesia ni posibles complicaciones.',
    clinicalData: [
      'Constantes: TA 125/80 mmHg, FC 88 lpm, Temp 37.8°C, SatO2 98%.',
      'Abdomen: Signo de McBurney positivo, sin peritonitis generalizada.',
      'Analítica: Leucocitosis 13,500/mm³ con neutrofilia.',
      'Paciente consciente, orientado y sin compromiso hemodinámico inmediato.'
    ],
    bioethicalDilemma: '¿Debe priorizarse la celeridad del flujo hospitalario o garantizar un proceso auténtico de consentimiento informado con información comprensible y resolución de dudas?',
    question: '¿Cómo debes actuar como médico responsable del paciente?',
    options: [
      {
        id: 'A',
        text: 'Insistir a Carlos que firme de inmediato para no perder el turno de quirófano, prometiéndole que todo saldrá bien.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          autonomy: -15,
          consent: -20,
          nonMaleficence: -5,
          communication: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE DEFICIENTE: Coerción y Falsa Información',
        outcomeNarrative: 'Carlos firmó bajo coacción y con gran angustia emocional. Aunque la cirugía fue exitosa, el paciente interpuso una queja formal ante atención al usuario por sentirse despojado de sus derechos como persona.',
        bioethicalExplanation: 'El consentimiento informado no es una mera firma legal para proteger al médico, sino un derecho humano fundamental. Forzar la firma sin brindar información comprensible anula la voluntariedad y vulnera gravemente el principio de Autonomía.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Se ignoró el derecho a la comprensión y autodeterminación.' },
          { name: 'Consentimiento', positive: false, description: 'Se redujo un acto clínico a un trámite burocrático coercitivo.' }
        ],
        consequenceFlag: 'coerced_consent_c1'
      },
      {
        id: 'B',
        text: 'Tomar 10 minutos para explicarle en lenguaje claro el diagnóstico, la técnica quirúrgica, riesgos comunes, tipo de anestesia y responder a sus dudas antes de que decida firmar.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          autonomy: +20,
          consent: +25,
          beneficence: +15,
          communication: +20,
          integrity: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE SÓLIDA: Auténtico Proceso Dialógico',
        outcomeNarrative: 'Carlos comprendió la necesidad de la apendicectomía, agradeció la claridad y empatía del equipo y otorgó su consentimiento de manera libre y confiada. El ingreso a quirófano se realizó con tranquilidad y colaboración del paciente.',
        bioethicalExplanation: 'Cumple a cabalidad con los tres elementos indispensables del consentimiento informado: información adecuada, comprensión real y voluntariedad plena. Fortalece la relación médico-paciente y reduce la ansiedad perioperatoria.',
        principlesAffected: [
          { name: 'Autonomía', positive: true, description: 'Se respetó la capacidad de decisión informada.' },
          { name: 'Beneficencia', positive: true, description: 'Se promovió el bienestar psicológico y la seguridad clínica.' },
          { name: 'Consentimiento', positive: true, description: 'Proceso dialógico riguroso y transparente.' }
        ],
        consequenceFlag: 'rigorous_consent_c1'
      },
      {
        id: 'C',
        text: 'Llamar a un familiar directo para que firme el consentimiento en lugar del paciente y así agilizar los trámites.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          autonomy: -10,
          consent: -15,
          integrity: -5
        },
        resultTitle: 'DECISIÓN JURÍDICA Y ÉTICAMENTE ERRÓNEA: Sustitución Injustificada',
        outcomeNarrative: 'El familiar firmó el documento, pero Carlos se molestó al sentirse invalidado cuando estaba en plenas facultades mentales para decidir por sí mismo.',
        bioethicalExplanation: 'El consentimiento por sustitución familiar solo es éticamente válido cuando el paciente carece de capacidad de hecho o derecho (inconsciencia, deterioro cognitivo severo). Sustituir a un adulto competente es un acto paternalista ilícito.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Se suplantó la voluntad de un adulto competente.' },
          { name: 'Integridad', positive: false, description: 'Procedimiento administrativamente irregular.' }
        ]
      }
    ]
  },
  {
    id: 2,
    level: 1,
    levelName: 'NIVEL 1 — FUNDAMENTOS',
    title: 'Caso 02: La Decisión de María',
    subtitle: 'Autonomía del paciente frente a las presiones de la familia',
    patient: {
      name: 'María Fernández',
      age: 54,
      diagnosis: 'Adenocarcinoma de ovario estadio IV metastásico',
      location: 'Planta de Oncología — Habitación 312',
      vitalsStatus: 'Estable',
      avatarType: 'maria_oncology'
    },
    setting: 'oncology',
    settingName: 'Unidad de Oncología Médica',
    clinicalContext: 'María lleva dos años luchando contra un cáncer de ovario en progresión tras múltiples líneas de quimioterapia y cirugías complejas. Tras una evaluación oncológica detallada donde se constata fracaso terapéutico, María expresa su deseo firme y lúcido de rechazar una nueva línea experimental con alta toxicidad y nula probabilidad curativa, solicitando iniciar cuidados paliativos exclusivos para estar en casa con confort. Sus dos hijos acuden desesperados a tu despacho exigiendo que continúes el tratamiento invasivo diciendo que "su madre está deprimida y no sabe lo que dice".',
    clinicalData: [
      'Estudio psiquiátrico: Paciente orientada en tiempo, espacio y persona; sin cuadro depresivo mayor ni psicosis.',
      'Estado funcional: ECOG 3, dolor controlado con bomba de morfina.',
      'María comprende claramente el pronóstico vital limitado (semanas a pocos meses).',
      'Directriz clara: "Quiero pasar mis últimos días en paz, sin náuseas extremas ni aislamiento en el hospital".'
    ],
    bioethicalDilemma: '¿Debe prevalecer la decisión lúcida de la paciente sobre su propio cuerpo o debe cederse ante la angustia y presión de los familiares que demandan más intervencionismo?',
    question: '¿Cuál es la conducta médica bioéticamente adecuada?',
    options: [
      {
        id: 'A',
        text: 'Ceder a la petición de los hijos y administrar la quimioterapia experimental porque la familia siempre busca el mayor bien del paciente.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          autonomy: -25,
          nonMaleficence: -20,
          beneficence: -10,
          integrity: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE INACEPTABLE: Ensañamiento y Violación de Autonomía',
        outcomeNarrative: 'María sufrió efectos adversos graves derivados del fármaco que aceleraron su deterioro orgánico sin aportar beneficio clínico, falleciendo en la UCI con sufrimiento innecesario.',
        bioethicalExplanation: 'Imponer un tratamiento con futilidad biológica y alta toxicidad contra la voluntad expresa y lúcida del paciente constituye una falta grave de no maleficencia (obstinación médica) y una vulneración flagrante de la dignidad y autonomía.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Se ignoró la voluntad libre de una paciente competente.' },
          { name: 'No Maleficencia', positive: false, description: 'Se indujo toxicidad y sufrimiento desproporcionado.' }
        ],
        consequenceFlag: 'ignored_maria_autonomy'
      },
      {
        id: 'B',
        text: 'Evaluar formalmente la capacidad de decisión de María, verificar que comprende pronóstico y alternativas, y respetar su rechazo terapéutico garantizando un plan integral de cuidados paliativos y apoyo a la familia.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          autonomy: +25,
          nonMaleficence: +20,
          beneficence: +20,
          communication: +20,
          integrity: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE SÓLIDA: Respeto al Rechazo Informado y Alivio del Sufrimiento',
        outcomeNarrative: 'María recibió un plan personalizado de control sintomático y pudo despedirse de sus hijos en su hogar con serenidad. El equipo de soporte brindó contención emocional a los hijos, quienes finalmente comprendieron el acto de amor de respetar a su madre.',
        bioethicalExplanation: 'El principio de Autonomía otorga al paciente con capacidad el derecho legal y ético de rechazar cualquier tratamiento (rechazo informado). La obligación del médico no es abandonar a la paciente, sino acompañarla con la máxima beneficencia a través de la medicina paliativa.',
        principlesAffected: [
          { name: 'Autonomía', positive: true, description: 'Pleno respeto a la autodeterminación del paciente lúcido.' },
          { name: 'No Maleficencia', positive: true, description: 'Prevención de futilidad terapéutica y sufrimiento inútil.' },
          { name: 'Beneficencia', positive: true, description: 'Atención integral paliativa centrada en la persona.' }
        ],
        consequenceFlag: 'respected_maria_autonomy'
      },
      {
        id: 'C',
        text: 'Intentar convencer insistentemente a María en múltiples visitas hasta que cambie de opinión para complacer a sus hijos.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          autonomy: -15,
          communication: -10,
          integrity: -5
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE CUESTIONABLE: Persuasión Invasiva',
        outcomeNarrative: 'María se sintió hostigada y desamparada por su médico, perdiendo la confianza en el equipo asistencial.',
        bioethicalExplanation: 'Diferenciar entre informar honestamente y presionar psicológicamente es clave. La insistencia continuada cruza la línea hacia la manipulación o coacción profesional.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Presión moral que vulnera la tranquilidad del paciente.' },
          { name: 'Comunicación', positive: false, description: 'Ruptura de la alianza terapéutica.' }
        ]
      },
      {
        id: 'D',
        text: 'Suspender de inmediato toda atención médica e indicar el alta sin seguimiento puesto que la paciente "no quiere tratamiento".',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          beneficence: -25,
          nonMaleficence: -20,
          integrity: -20
        },
        resultTitle: 'DECISIÓN DELEZNABLE: Abandono de Paciente',
        outcomeNarrative: 'María sufrió dolor no controlado en su domicilio debido a la falta de prescripción y seguimiento paliativo. El comité deontológico inició un expediente.',
        bioethicalExplanation: 'El rechazo a un tratamiento curativo jamás significa rechazo a la atención médica. El abandono de un paciente es una de las mayores faltas deontológicas que existen en medicina.',
        principlesAffected: [
          { name: 'Beneficencia', positive: false, description: 'Abandono absoluto de la obligación de cuidar y aliviar.' },
          { name: 'Integridad', positive: false, description: 'Incumplimiento gravísimo de los deberes de la profesión.' }
        ]
      }
    ]
  },
  {
    id: 3,
    level: 1,
    levelName: 'NIVEL 1 — FUNDAMENTOS',
    title: 'Caso 03: El Dilema de la Confidencialidad',
    subtitle: 'Secreto profesional, límites y confianza médica',
    patient: {
      name: 'Lucía Vargas',
      age: 29,
      diagnosis: 'Infección por VIH en fase asintomática de reciente confirmación',
      location: 'Consulta Externa de Infectología',
      vitalsStatus: 'Estable',
      avatarType: 'lucia_infectious'
    },
    setting: 'consultation',
    settingName: 'Consulta Externa de Medicina Interna',
    clinicalContext: 'Lucía acude sola a recoger los resultados confirmatorios de su serología. Al comunicarle con calidez el diagnóstico y el excelente pronóstico con el tratamiento antirretroviral actual, rompe en llanto. Minutos después, el esposo de Lucía y su empleador (que financia el seguro corporativo) entran exigiendo que les reveles el resultado inmediatamente, alegando que "como esposo tengo derecho a saber todo" y el empleador que "la empresa paga las pruebas". Lucía te pide con la mirada que no reveles nada.',
    clinicalData: [
      'Carga viral detectable, recuento CD4: 520 céls/mcL.',
      'Lucía aún está asimilando la noticia en estado de shock agudo.',
      'La paciente no se niega a comunicárselo a su pareja en el futuro, pero pide tiempo y apoyo profesional para hacerlo ella misma en un entorno seguro.'
    ],
    bioethicalDilemma: '¿Debe el médico salvaguardar el secreto profesional ante la presión familiar y económica externa, acompañando a la paciente para una revelación responsable?',
    question: '¿Qué actitud debes mantener ante la exigencia de revelación?',
    options: [
      {
        id: 'A',
        text: 'Revelar el diagnóstico al esposo y al empleador para evitar discusiones y porque la pareja tiene derecho a la verdad.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          confidentiality: -30,
          autonomy: -20,
          integrity: -20,
          nonMaleficence: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE GRAVE: Ruptura del Secreto Profesional',
        outcomeNarrative: 'Lucía sufrió violencia doméstica y fue despedida de su empleo de manera discriminatoria tras la revelación no consentida. Presentó una demanda penal por violación del secreto médico.',
        bioethicalExplanation: 'El secreto profesional es inquebrantable salvo excepciones extremas muy concretas reguladas por ley. Ni el vínculo conyugal ni la relación laboral otorgan derecho a vulnerar la privacidad médica sin consentimiento expreso.',
        principlesAffected: [
          { name: 'Confidencialidad', positive: false, description: 'Violación directa de la intimidad del paciente.' },
          { name: 'No Maleficencia', positive: false, description: 'Se expuso a la paciente a discriminación y violencia.' }
        ],
        consequenceFlag: 'breached_confidentiality_c3'
      },
      {
        id: 'B',
        text: 'Explicar con firmeza y educación que la historia clínica está protegida por secreto médico, no revelar dato alguno, y ofrecer a Lucía una consulta de consejería para apoyarla a comunicar el diagnóstico a su pareja de forma responsable.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          confidentiality: +25,
          autonomy: +20,
          integrity: +20,
          beneficence: +15,
          communication: +20
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE EJEMPLAR: Custodia del Secreto y Acompañamiento',
        outcomeNarrative: 'La privacidad de Lucía fue preservada. En la siguiente sesión de consejería, con la mediación del equipo de salud, Lucía pudo comunicárselo a su pareja con serenidad y adherirse exitosamente a la terapia.',
        bioethicalExplanation: 'Protege el pilar fundacional de la confianza clínica. Fomenta que el paciente asuma su responsabilidad preventiva sin ser víctima de estigmatización ni arbitrariedad.',
        principlesAffected: [
          { name: 'Confidencialidad', positive: true, description: 'Custodia rigurosa de los datos sensibles.' },
          { name: 'Autonomía', positive: true, description: 'Empoderamiento del paciente para la comunicación asertiva.' },
          { name: 'Integridad', positive: true, description: 'Cumplimiento estricto del código deontológico médico.' }
        ],
        consequenceFlag: 'upheld_confidentiality_c3'
      },
      {
        id: 'C',
        text: 'Inventar un diagnóstico falso leve ante el esposo para salir del paso.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          integrity: -15,
          communication: -10,
          confidentiality: +5
        },
        resultTitle: 'DECISIÓN CUESTIONABLE: Mentira y Falta de Integridad',
        outcomeNarrative: 'Aunque se protegió el secreto momentáneamente, la mentira generó confusión en el tratamiento posterior y comprometió la credibilidad del médico.',
        bioethicalExplanation: 'Mentir nunca es una solución ética viable en la práctica clínica. El médico debe proteger la confidencialidad mediante la asertividad y el marco legal, no mediante falsedades.',
        principlesAffected: [
          { name: 'Integridad', positive: false, description: 'Uso de la mentira como sustituto de la gestión profesional.' }
        ]
      }
    ]
  },
  {
    id: 4,
    level: 1,
    levelName: 'NIVEL 1 — FUNDAMENTOS',
    title: 'Caso 04: Beneficencia vs. Obstinación Terapéutica',
    subtitle: 'Proporcionalidad terapéutica y dignidad en el final de la vida',
    patient: {
      name: 'Don Roberto',
      age: 79,
      diagnosis: 'Demencia avanzada en fase terminal, shock séptico refractario y fallo multiorgánico',
      location: 'UCI — Box 02',
      vitalsStatus: 'Crítico',
      avatarType: 'roberto_palliative'
    },
    setting: 'icu',
    settingName: 'Unidad de Cuidados Intensivos',
    clinicalContext: 'Don Roberto lleva 14 días en la UCI con soporte vasopresor a dosis máximas, hemofiltración continua y ventilación mecánica invasiva. La función cerebral es nula tras dos paradas cardíacas previas y no hay respuesta a ningún tratamiento curativo. El equipo intensivista coincide en que la situación es clínicamente irreversible. El médico jefe de guardia sugiere aplicar una nueva técnica quirúrgica experimental sumamente invasiva "para probar si podemos lograr publicar un caso clínico".',
    clinicalData: [
      'Lactato sérico: 9.8 mmol/L (acidosis láctica severa refractaria).',
      'Fallo multiorgánico: renal, hepático, respiratorio y cardiovascular.',
      'Pronóstico médico: Irreversible; supervivencia estimada menor a 24-48 horas.',
      'La familia solicita que no se le torture más con procedimientos dolorosos e inútiles.'
    ],
    bioethicalDilemma: '¿Debe limitarse el esfuerzo terapéutico para evitar el ensañamiento fútil o seguir aplicando medidas invasivas sin expectativa de beneficio?',
    question: '¿Qué decisión médica corresponde tomar?',
    options: [
      {
        id: 'A',
        text: 'Adecuar el esfuerzo terapéutico: retirar medidas desproporcionadas no orientadas al confort, garantizar analgesia y sedación paliativa óptima, y permitir que la familia acompañe a Don Roberto en sus últimos momentos.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          nonMaleficence: +25,
          beneficence: +20,
          integrity: +20,
          communication: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE IMPECABLE: No Maleficencia y Muerte Digna',
        outcomeNarrative: 'Don Roberto falleció de manera apacible, sin dolor ni disnea, acompañado del afecto de sus seres queridos. La familia expresó una profunda gratitud por la humanidad del equipo médico.',
        bioethicalExplanation: 'Adecuar el esfuerzo terapéutico cuando la medicina curativa no ofrece beneficio es un imperativo ético derivado de la No Maleficencia (evitar la distanasia) y de la Beneficencia (garantizar el máximo confort y dignidad en la muerte).',
        principlesAffected: [
          { name: 'No Maleficencia', positive: true, description: 'Evitación activa del ensañamiento terapéutico y futilidad.' },
          { name: 'Beneficencia', positive: true, description: 'Enfoque centrado en el alivio del dolor y la dignidad.' }
        ],
        consequenceFlag: 'palliative_comfort_c4'
      },
      {
        id: 'B',
        text: 'Aceptar realizar el procedimiento experimental invasivo propuesto por el jefe para aprender la técnica quirúrgica.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          nonMaleficence: -30,
          beneficence: -20,
          integrity: -25,
          justice: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE CONDENABLE: Instrumentalización de la Persona',
        outcomeNarrative: 'El procedimiento causó hemorragias masivas y sufrimiento agónico innecesario. El caso fue remitido al comité de ética hospitalario para sanción deontológica.',
        bioethicalExplanation: 'Utilizar el cuerpo de un paciente agónico para fines de aprendizaje o vanidad académica sin beneficio terapéutico para él constituye una instrumentalización prohibida por el principio de dignidad humana (Kant: la persona nunca es un medio, sino un fin en sí misma).',
        principlesAffected: [
          { name: 'No Maleficencia', positive: false, description: 'Daño severo, desproporcionado y fútil.' },
          { name: 'Integridad', positive: false, description: 'Uso no ético del paciente con fines ajenos a su salud.' }
        ],
        consequenceFlag: 'performed_futile_surgery'
      },
      {
        id: 'C',
        text: 'Mantener todos los soportes invasivos indefinidamente sin hablar con la familia para evitar confrontaciones.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          nonMaleficence: -15,
          communication: -20,
          integrity: -10
        },
        resultTitle: 'DECISIÓN INADECUADA: Omisión y Prolongación del Sufrimiento',
        outcomeNarrative: 'La agonía se prolongó artificialmente durante días en soledad, impidiendo el duelo saludable de los familiares.',
        bioethicalExplanation: 'La inacción o evasión de decisiones por temor a conversaciones difíciles con la familia no exime de la responsabilidad ética de evitar la obstinación diagnóstica y terapéutica.',
        principlesAffected: [
          { name: 'No Maleficencia', positive: false, description: 'Prolongación injustificada de la agonía biológica.' }
        ]
      }
    ]
  },

  // ==========================================
  // NIVEL 2 — CONFLICTOS CLÍNICOS
  // ==========================================
  {
    id: 5,
    level: 2,
    levelName: 'NIVEL 2 — CONFLICTOS CLÍNICOS',
    title: 'Caso 05: Rechazo de Transfusión por Convicciones',
    subtitle: 'Directrices anticipadas y alternativas terapéuticas ante objeción de conciencia del paciente',
    patient: {
      name: 'Elena Torres',
      age: 36,
      diagnosis: 'Hemorragia postparto grave por atonía uterina con anemia aguda',
      location: 'Quirófano / Reanimación Obstétrica',
      vitalsStatus: 'Grave',
      avatarType: 'elena_religious'
    },
    setting: 'surgery',
    settingName: 'Unidad Quirúrgica de Maternidad',
    clinicalContext: 'Elena acaba de dar a luz a un recién nacido sano, pero presenta hemorragia postparto masiva (pérdida estimada de 1500 ml). La hemoglobina ha caído a 5.8 g/dL. Elena porta un documento legal de voluntades anticipadas debidamente notariado y firmado en plena lucidez que rechaza formalmente la transfusión de concentrados de hematíes o sangre total por convicciones religiosas como Testigo de Jehová, pero autoriza explícitamente el uso de técnicas de recuperación intraoperatoria de sangre (Cell Saver), volumen con cristaloides/coloides, ácido tranexámico y factores procoagulantes recombinantes. El médico anestesista insiste en transfundir sangre a la fuerza mientras duerme.',
    clinicalData: [
      'Constantes: TA 90/55 mmHg, FC 115 lpm, SatO2 96% con oxígeno.',
      'Documento de voluntades anticipadas verificado y vigente en el historial clínico.',
      'Existen alternativas farmacológicas y mecánicas disponibles en el quirófano.',
      'Elena ratificó verbalmente su decisión de forma lúcida antes de la sedación quirúrgica.'
    ],
    bioethicalDilemma: '¿Debe el equipo respetar la directriz anticipada formal de una paciente adulta competente aplicando todas las alternativas médicas posibles, o imponer la transfusión por la fuerza?',
    question: '¿Qué estrategia clínica y ética debe liderar el equipo?',
    options: [
      {
        id: 'A',
        text: 'Aprovechar la sedación anestésica para transfundir los concentrados de sangre a escondidas, argumentando que lo importante es salvar la vida sin importar sus creencias.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          autonomy: -30,
          integrity: -25,
          consent: -25,
          communication: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE INACEPTABLE: Violación de Directrices Previas y Engaño',
        outcomeNarrative: 'La paciente descubrió la transfusión no consentida a través de la analítica del informe de alta. Sufrió una profunda crisis existencial y espiritual, y demandó al hospital por vulneración de derechos fundamentales.',
        bioethicalExplanation: 'Ignorar una directriz anticipada válida de un adulto competente mediante el engaño representa un paternalismo extremo e ilícito. La autonomía confiere el derecho a asumir riesgos vitales en coherencia con los propios valores personales.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Vulneración de voluntades anticipadas válidas y legalmente vinculantes.' },
          { name: 'Integridad', positive: false, description: 'Conducta médica basada en el engaño y la coacción.' }
        ],
        consequenceFlag: 'forced_transfusion_c5'
      },
      {
        id: 'B',
        text: 'Respetar rigurosamente la voluntad y directrices de Elena, y activar de inmediato el protocolo de cirugía sin sangre: hemostasia quirúrgica meticulosa, ácido tranexámico, Cell Saver, expansión con coloides y soporte intensivo.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          autonomy: +25,
          beneficence: +20,
          integrity: +20,
          consent: +20,
          nonMaleficence: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE SÓLIDA: Respeto a las Creencias con Máximo Rigor Clínico',
        outcomeNarrative: 'El equipo controló la hemorragia mediante embolización uterina y el uso de Cell Saver con soporte hematínico. Elena evolucionó favorablemente y fue dada de alta con su bebé con su dignidad intacta.',
        bioethicalExplanation: 'Combina el máximo respeto a la Autonomía con una Beneficencia activa basada en la excelencia técnica mediante alternativas farmacológicas y quirúrgicas reconocidas internacionalmente.',
        principlesAffected: [
          { name: 'Autonomía', positive: true, description: 'Respeto irrestricto a los valores existenciales del paciente.' },
          { name: 'Beneficencia', positive: true, description: 'Uso de la mejor evidencia clínica no transfusional.' },
          { name: 'Consentimiento', positive: true, description: 'Fidelidad al documento de voluntades anticipadas.' }
        ],
        consequenceFlag: 'respected_bloodless_c5'
      },
      {
        id: 'C',
        text: 'Negarse a intervenirla quirúrgicamente argumentando objeción de conciencia y dejarla sin atención en la sala de partos.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          beneficence: -30,
          nonMaleficence: -25,
          integrity: -20
        },
        resultTitle: 'DECISIÓN DELEZNABLE: Abandono en Situación de Emergencia Vital',
        outcomeNarrative: 'La paciente sufrió shock hipovolémico severo por demora asistencial. La objeción de conciencia nunca puede justificar el abandono de una urgencia en curso.',
        bioethicalExplanation: 'La objeción de conciencia es un derecho del profesional, pero está sujeta al deber inexcusable de garantizar la continuidad asistencial y la atención inmediata en situaciones de riesgo vital inminente.',
        principlesAffected: [
          { name: 'No Maleficencia', positive: false, description: 'Riesgo inminente de muerte evitable por abandono.' },
          { name: 'Integridad', positive: false, description: 'Uso espurio de la objeción de conciencia médica.' }
        ]
      }
    ]
  },
  {
    id: 6,
    level: 2,
    levelName: 'NIVEL 2 — CONFLICTOS CLÍNICOS',
    title: 'Caso 06: El Paciente Inconsciente en Trauma',
    subtitle: 'Consentimiento presunto, estado de necesidad y deber de auxilio',
    patient: {
      name: 'David Ortiz (Identidad preliminar)',
      age: 24,
      diagnosis: 'Politraumatismo grave, traumatismo craneoencefálico con hematoma epidural agudo',
      location: 'Shock Room — Box Vital',
      vitalsStatus: 'Crítico',
      avatarType: 'david_coma'
    },
    setting: 'emergency',
    settingName: 'Boxes de Reanimación y Trauma',
    clinicalContext: 'David llega traído por el servicio de emergencias tras sufrir un accidente en motocicleta. Presenta una escala de Glasgow de 5 puntos (coma profundo) y midriasis unilateral derecha, signo inequívoco de herniación cerebral inminente por hematoma epidural a tensión. No porta documento de identidad oficial, no hay familiares presentes y no es posible contactar a nadie. El neurocirujano está listo, pero un estudiante de prácticas duda si operar sin tener una firma de consentimiento.',
    clinicalData: [
      'Glasgow 5: Apertura ocular 1, respuesta verbal 1, respuesta motora 3.',
      'TAC craneal urgente: Hematoma epidural de 60 cc con desviación de línea media de 12 mm.',
      'Ventana terapéutica: Menor a 30 minutos para evitar daño cerebral irreversible o muerte encefálica.',
      'Imposibilidad material de obtener consentimiento expreso del paciente o tutores.'
    ],
    bioethicalDilemma: '¿Debe el equipo médico intervenir de urgencia amparado en el estado de necesidad y consentimiento presunto, o esperar trámites administrativos/familiares?',
    question: '¿Qué conducta asistencial se debe adoptar sin demora?',
    options: [
      {
        id: 'A',
        text: 'Proceder a la craneotomía descompresiva inmediata bajo la doctrina del consentimiento presunto y estado de necesidad médica, registrando detalladamente en la historia la urgencia vital.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          beneficence: +25,
          nonMaleficence: +20,
          integrity: +20,
          justice: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE SÓLIDA: Deber de Socorro y Consentimiento Presunto',
        outcomeNarrative: 'La evacuación precoz del hematoma salvó la vida de David y evitó secuelas neurológicas permanentes. La familia llegó horas después y agradeció profundamente la rápida actuación médica.',
        bioethicalExplanation: 'En situaciones de emergencia vital inminente con paciente incompetente y ausencia de representantes, la bioética y el derecho reconocen el principio del "Consentimiento Presunto" fundamentado en la presunción razonable de que cualquier persona desearía ser salvada.',
        principlesAffected: [
          { name: 'Beneficencia', positive: true, description: 'Actuación inmediata para salvar la vida y preservar la integridad biológica.' },
          { name: 'No Maleficencia', positive: true, description: 'Prevención de muerte encefálica o secuelas neurológicas catastróficas.' }
        ],
        consequenceFlag: 'emergency_presumed_consent_c6'
      },
      {
        id: 'B',
        text: 'Esperar a que la policía local logre localizar a algún familiar de primer grado para que firme la autorización antes de ingresar a quirófano.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          beneficence: -25,
          nonMaleficence: -30,
          integrity: -20
        },
        resultTitle: 'DECISIÓN DEVASTADORA: Mala Praxis por Demora Burocrática',
        outcomeNarrative: 'La localización de los padres tardó 90 minutos. Durante la espera, David sufrió paro cardiorrespiratorio y daño anóxico cerebral irreversible con muerte encefálica.',
        bioethicalExplanation: 'Subordinar la supervivencia de un paciente crítico a un formalismo burocrático cuando existe un estado de necesidad constituye negligencia médica grave e inobservancia del deber de socorro.',
        principlesAffected: [
          { name: 'Beneficencia', positive: false, description: 'Omisión del auxilio oportuno en la ventana terapéutica crítica.' },
          { name: 'No Maleficencia', positive: false, description: 'Daño irreversible y muerte evitable por inacción injustificada.' }
        ]
      },
      {
        id: 'C',
        text: 'Solicitar autorización judicial de urgencia antes de tocar al paciente.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          nonMaleficence: -15,
          beneficence: -10,
          integrity: -5
        },
        resultTitle: 'DECISIÓN EQUIVOCADA: Desconocimiento del Marco de Urgencias',
        outcomeNarrative: 'El juzgado de guardia respondió recordando que los médicos tienen potestad inmediata en emergencias, pero el retraso causó secuelas motoras.',
        bioethicalExplanation: 'La autorización judicial no es requerida en emergencias médicas agudas donde el retraso pone en riesgo inminente la vida del paciente.',
        principlesAffected: [
          { name: 'Beneficencia', positive: false, description: 'Retraso innecesario en la intervención de rescate.' }
        ]
      }
    ]
  },
  {
    id: 7,
    level: 2,
    levelName: 'NIVEL 2 — CONFLICTOS CLÍNICOS',
    title: 'Caso 07: El Menor Maduro y la Confidencialidad',
    subtitle: 'Capacidad progresiva, intimidad del adolescente y tutela parental',
    patient: {
      name: 'Sofía Navarro',
      age: 16,
      diagnosis: 'Petición de asesoramiento en salud sexual, anticoncepción y sospecha de ITS',
      location: 'Consulta Joven de Atención Primaria',
      vitalsStatus: 'Estable',
      avatarType: 'sofia_adolescent'
    },
    setting: 'consultation',
    settingName: 'Consulta de Salud Integral del Adolescente',
    clinicalContext: 'Sofía, de 16 años, acude sola a la consulta. Solicita orientación sobre métodos anticonceptivos reversibles de larga duración y tratamiento profiláctico tras iniciar relaciones sexuales. Demuestra excelente comprensión, madurez reflexiva y conocimiento de los riesgos y beneficios. Al día siguiente, la madre de Sofía acude a tu despacho muy exaltada, exigiendo ver el historial clínico completo de su hija y amenazando con denunciar al médico si no le informa de todo, alegando su condición de patria potestad.',
    clinicalData: [
      'Evaluación de madurez: Sofía comprende el funcionamiento de su cuerpo y los métodos solicitados.',
      'No existen indicios de abuso, coacción externa ni explotación sexual.',
      'Sofía solicita expresamente mantener la confidencialidad para evitar represalias familiares severas.'
    ],
    bioethicalDilemma: '¿Debe prevalecer la confidencialidad de la menor con capacidad demostrada (doctrina del menor maduro) o el derecho de tutela de los progenitores?',
    question: '¿Cómo debe actuar el profesional sanitario?',
    options: [
      {
        id: 'A',
        text: 'Entregar de inmediato el historial y revelar todo a la madre porque los padres tienen derecho legal absoluto sobre los menores de 18 años.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          confidentiality: -25,
          autonomy: -20,
          communication: -20,
          integrity: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE PERJUDICIAL: Traición a la Confianza del Adolescente',
        outcomeNarrative: 'Sofía fue castigada severamente, abandonó sus controles médicos y no volvió a consultar dudas de salud por desconfianza total en el sistema sanitario.',
        bioethicalExplanation: 'La doctrina del menor maduro reconoce que los adolescentes con capacidad reflexiva tienen derecho a la intimidad y a la atención de su salud sexual sin que se vulnere su secreto, salvo que exista riesgo vital o desprotección grave.',
        principlesAffected: [
          { name: 'Confidencialidad', positive: false, description: 'Ruptura injustificada del secreto médico del menor maduro.' },
          { name: 'Autonomía', positive: false, description: 'Anulación de la autonomía evolutiva y progresiva del adolescente.' }
        ],
        consequenceFlag: 'betrayed_minor_confidentiality'
      },
      {
        id: 'B',
        text: 'Explicar a la madre con respeto el marco ético y normativo del menor maduro y el deber de secreto médico, proteger la intimidad de Sofía y ofrecer un espacio voluntario de mediación familiar si la joven lo consiente.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          confidentiality: +25,
          autonomy: +20,
          communication: +20,
          integrity: +20,
          beneficence: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE ACERTADA: Protección del Menor Maduro y Mediación',
        outcomeNarrative: 'La madre comprendió el rol protector de la consulta y, semanas más tarde, con la confianza ganada, Sofía invitó a su madre a una sesión compartida de diálogo constructivo.',
        bioethicalExplanation: 'Protege la salud pública y el derecho a la salud del menor sin fomentar barreras asistenciales, promoviendo al mismo tiempo la reconciliación familiar mediante el diálogo voluntario.',
        principlesAffected: [
          { name: 'Confidencialidad', positive: true, description: 'Resguardo de la intimidad en la esfera de la salud reproductiva.' },
          { name: 'Autonomía', positive: true, description: 'Reconocimiento de la capacidad gradual del adolescente.' },
          { name: 'Integridad', positive: true, description: 'Defensa de las garantías de los derechos del paciente menor.' }
        ],
        consequenceFlag: 'protected_minor_mature_c7'
      },
      {
        id: 'C',
        text: 'Negarle la atención anticonceptiva a Sofía y exigirle que vuelva obligatoriamente acompañada de sus padres.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          beneficence: -15,
          communication: -15,
          integrity: -10
        },
        resultTitle: 'DECISIÓN INADECUADA: Creación de Barreras a la Salud',
        outcomeNarrative: 'Sofía recurrió a métodos inseguros sin supervisión médica, con riesgo de embarazo no planificado e infecciones.',
        bioethicalExplanation: 'Poner trabas administrativas o morales a la salud sexual de adolescentes competentes contradice las directrices de la OMS y los principios de prevención y beneficencia.',
        principlesAffected: [
          { name: 'Beneficencia', positive: false, description: 'Omisión de educación y prevención sanitaria eficaz.' }
        ]
      }
    ]
  },
  {
    id: 8,
    level: 2,
    levelName: 'NIVEL 2 — CONFLICTOS CLÍNICOS',
    title: 'Caso 08: El Pacto de Silencio Familiar',
    subtitle: 'La conspiración de silencio frente al derecho del paciente a conocer su diagnóstico',
    patient: {
      name: 'Mateo Salgado',
      age: 68,
      diagnosis: 'Neoplasia pulmonar microcítica con metástasis óseas',
      location: 'Medicina Interna — Habitación 205',
      vitalsStatus: 'Estable',
      avatarType: 'mateo_terminal_family'
    },
    setting: 'consultation',
    settingName: 'Sala de Información Asistencial',
    clinicalContext: 'Mateo es un maestro jubilado muy lúcido y observador. Tras realizarse una biopsia pulmonar, los resultados confirman un cáncer pulmonar avanzado e incurable. La esposa y el hijo de Mateo te interceptan en el pasillo y te suplican con lágrimas: "Doctor, por favor, no le diga que tiene cáncer; se va a morir de tristeza si lo sabe. Dígale que es solo una neumonía resistente". Minutos después, al entrar a la habitación, Mateo te mira fijamente y te pregunta: "Doctor, sé que algo no va bien con mi biopsia. Quiero que me hable con la verdad: ¿qué tengo exactamente?".',
    clinicalData: [
      'Paciente plenamente consciente, orientado y cognitivamente intacto.',
      'Pregunta explícita, directa y voluntaria del paciente sobre su estado real.',
      'La familia actúa motivada por la angustia y el deseo de protegerlo del dolor emocional.'
    ],
    bioethicalDilemma: '¿Debe el médico respetar el derecho del paciente a la verdad sobre su propia salud o mantener la "conspiración de silencio" impuesta por la familia?',
    question: '¿Cómo debe gestionar el médico la comunicación de la verdad diagnóstica?',
    options: [
      {
        id: 'A',
        text: 'Mentirle a Mateo diciendo que solo es una infección pulmonar para mantener la paz con la familia y evitarle tristeza inmediata.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          autonomy: -25,
          integrity: -25,
          communication: -20,
          consent: -20
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE DEFICIENTE: Conspiración de Silencio y Engaño',
        outcomeNarrative: 'Mateo notó incoherencias en el tratamiento, descubrió la mentira semanas después sintiéndose engañado por su propia familia y su médico, perdiendo la oportunidad de ordenar sus asuntos personales y despedirse en paz.',
        bioethicalExplanation: 'El pacto de silencio vulnera el derecho a la verdad y despoja al paciente de la oportunidad de tomar decisiones sobre el final de su vida, generando aislamiento y sufrimiento emocional a mediano plazo.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Se privó al paciente de la información necesaria para gestionar su propia vida.' },
          { name: 'Integridad', positive: false, description: 'Uso inaceptable de la mentira sistemática en la relación clínica.' }
        ],
        consequenceFlag: 'maintained_silence_pact'
      },
      {
        id: 'B',
        text: 'Acompañar a la familia para explicarles el perjuicio del engaño, explorar delicadamente con Mateo qué sabe y cuánto desea saber, y comunicarle la verdad con empatía, gradualidad y soporte asistencial continuo.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          autonomy: +25,
          communication: +25,
          beneficence: +20,
          integrity: +20,
          nonMaleficence: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE MAGNÍFICA: Comunicación Empática de la Verdad',
        outcomeNarrative: 'Mateo asimiló la noticia con entereza y agradeció la honestidad de su médico. Pudo elaborar un plan de vida con su familia, arreglar sus voluntades y vivir sus últimos meses con autenticidad y amor compartido.',
        bioethicalExplanation: 'El derecho a la información es un derecho del paciente. El deber del médico no es soltar la noticia de golpe ("verdad soportable y dosificada"), sino comunicarla con calidez, explorando los límites que el propio paciente marque.',
        principlesAffected: [
          { name: 'Autonomía', positive: true, description: 'Empoderamiento del paciente para afrontar su realidad con dignidad.' },
          { name: 'Comunicación', positive: true, description: 'Habilidad clínica superior en transmisión de malas noticias.' },
          { name: 'Beneficencia', positive: true, description: 'Alivio de la soledad y soporte integral a la unidad paciente-familia.' }
        ],
        consequenceFlag: 'broke_silence_empathy_c8'
      },
      {
        id: 'C',
        text: 'Decirle bruscamente toda la gravedad del cáncer sin preparación previa ni contención para quitarse la responsabilidad de encima.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          communication: -20,
          nonMaleficence: -15,
          beneficence: -10,
          autonomy: +10
        },
        resultTitle: 'DECISIÓN TOXICAMENTE BRUSCA: Verdad sin Empatía',
        outcomeNarrative: 'Aunque se dijo la verdad técnica, la frialdad generó un cuadro de pánico agudo en el paciente sin contención emocional.',
        bioethicalExplanation: 'La verdad es un deber moral, pero arrojarla sin compasión ni técnica comunicativa viola el principio de no maleficencia.',
        principlesAffected: [
          { name: 'Comunicación', positive: false, description: 'Falta de tacto y desatención al impacto emocional del enfermo.' }
        ]
      }
    ]
  },

  // ==========================================
  // NIVEL 3 — BIOÉTICA AVANZADA
  // ==========================================
  {
    id: 9,
    level: 3,
    levelName: 'NIVEL 3 — BIOÉTICA AVANZADA',
    title: 'Caso 09: Distribución de Recursos Escasos',
    subtitle: 'Triaje ético, justicia distributiva y optimización de vidas salvadas',
    patient: {
      name: 'Pedro Aguirre y Candidatos a UCI',
      age: 'Crisis de Triaje',
      diagnosis: 'Dos pacientes críticos con necesidad urgente de 1 sola cama libre con ventilador mecánico',
      location: 'Comité de Triaje de Cuidados Intensivos',
      vitalsStatus: 'Crítico',
      avatarType: 'pedro_triage'
    },
    setting: 'ethics_board',
    settingName: 'Comité de Triaje y Crisis Asistencial',
    clinicalContext: 'Durante un brote infeccioso grave con colapso hospitalario, solo queda disponible una única cama con ventilador en la UCI. Se presentan dos pacientes simultáneos en fallo respiratorio inminente:\n- Paciente A (Pedro, 52 años): Sin comorbilidades previas, neumonía grave aguda con alta probabilidad de recuperación total si recibe soporte ventilatorio durante 5-7 días (SOFA score: 4).\n- Paciente B (Don Fernando, 84 años, político influyente y donante del hospital): Insuficiencia cardíaca terminal, EPOC severo y fallo multiorgánico avanzado, con una probabilidad estimada de supervivencia en UCI menor al 8% (SOFA score: 14).\nLa dirección del hospital recibe llamadas de presión para ingresar a Don Fernando por su estatus social.',
    clinicalData: [
      'Recurso crítico: 1 solo puesto de UCI / ventilador mecánico.',
      'Paciente A: Esperanza de vida post-UCI > 25 años, alta reversibilidad.',
      'Paciente B: Futilidad biológica en UCI, comorbilidades terminales irreversibles.',
      'Principio rector: Criterio clínico objetivo y mayor beneficio potencial en vidas y años de vida salvados.'
    ],
    bioethicalDilemma: '¿Debe asignarse el recurso escaso basándose en criterios objetivos de pronóstico médico y justicia distributiva, o ceder ante presiones socioeconómicas e influencias?',
    question: '¿Qué asignación debe dictaminar el equipo médico responsable?',
    options: [
      {
        id: 'A',
        text: 'Asignar la cama de UCI al donante y político influyente (Paciente B) para mantener la financiación y reputación del hospital.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          justice: -30,
          integrity: -30,
          beneficence: -15,
          nonMaleficence: -15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE CORRUPTA: Discriminación y Violación de la Justicia',
        outcomeNarrative: 'El paciente A falleció por asfixia en la sala general por falta de soporte respiratorio. El paciente B falleció 48 horas después en la UCI pese al soporte. Se desató un escándalo de corrupción sanitaria.',
        bioethicalExplanation: 'El principio de Justicia distributiva exige que los recursos médicos se distribuyan con equidad e imparcialidad clínica. Asignar camas de UCI por poder económico o estatus social viola los derechos humanos y la deontología médica universal.',
        principlesAffected: [
          { name: 'Justicia', positive: false, description: 'Discriminación flagrante y trato desigual no basado en necesidad médica.' },
          { name: 'Integridad', positive: false, description: 'Corrupción deontológica e influencia indebida.' }
        ],
        consequenceFlag: 'corrupt_triage_c9'
      },
      {
        id: 'B',
        text: 'Asignar la cama de UCI al Paciente A conforme al protocolo ético de triaje por mayor probabilidad de supervivencia y beneficio terapéutico objetivo, y garantizar al Paciente B un plan intensivo de cuidados paliativos y confort.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          justice: +25,
          integrity: +25,
          beneficence: +20,
          nonMaleficence: +20
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE SÓLIDA: Justicia Distributiva y Priorización Clínica Objetiva',
        outcomeNarrative: 'El Paciente A fue extubado con éxito tras 6 días en UCI y se recuperó íntegramente. El Paciente B recibió un manejo paliativo impecable con control absoluto de la disnea y dignidad, arropado por su familia.',
        bioethicalExplanation: 'En condiciones de escasez de recursos, la justicia distributiva obliga a maximizar las vidas salvadas y priorizar a los pacientes con mayor potencial de reversibilidad clínica, sin abandonar nunca a los pacientes no priorizados, a quienes se les debe proveer el mejor cuidado paliativo.',
        principlesAffected: [
          { name: 'Justicia', positive: true, description: 'Aplicación equitativa y científica de criterios de asignación.' },
          { name: 'Integridad', positive: true, description: 'Resistencia ética intachable ante presiones externas de poder.' },
          { name: 'Beneficencia', positive: true, description: 'Maximización del beneficio en salud y cuidado integral.' }
        ],
        consequenceFlag: 'ethical_triage_c9'
      },
      {
        id: 'C',
        text: 'Echarlo a suertes con una moneda o asignarlo al primero que llegó al hospital por orden estricto de llegada sin mirar pronóstico.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          justice: -10,
          beneficence: -10,
          integrity: -5
        },
        resultTitle: 'DECISIÓN SUBÓPTIMA: Lotería Ciega sin Criterio Médico',
        outcomeNarrative: 'El orden ciego de llegada no optimizó la supervivencia hospitalaria en contexto de catástrofe.',
        bioethicalExplanation: 'Aunque la lotería parece imparcial, en medicina de catástrofes y recursos escasos ignora la efectividad clínica y la probabilidad de beneficio, resultando en mayor mortalidad global evitable.',
        principlesAffected: [
          { name: 'Justicia', positive: false, description: 'Ineficiencia distributiva en la gestión de recursos de soporte vital.' }
        ]
      }
    ]
  },
  {
    id: 10,
    level: 3,
    levelName: 'NIVEL 3 — BIOÉTICA AVANZADA',
    title: 'Caso 10: Donación de Órganos y Muerte Encefálica',
    subtitle: 'Autonomía post-mortem, diagnóstico de muerte y acompañamiento en el duelo',
    patient: {
      name: 'Jorge Benítez (Donante)',
      age: 31,
      diagnosis: 'Muerte encefálica confirmada tras traumatismo craneal severo',
      location: 'UCI de Neurotrauma',
      vitalsStatus: 'Crítico',
      avatarType: 'donante_transplant'
    },
    setting: 'ethics_board',
    settingName: 'Unidad de Coordinación de Trasplantes',
    clinicalContext: 'Jorge sufrió un traumatismo craneoencefálico irreversible. Tras un protocolo riguroso de exploración clínica, test de apnea y electroencefalograma isoeléctrico realizados por tres médicos independientes, se declara formalmente la Muerte Encefálica. Jorge estaba inscrito de manera oficial y voluntaria en el Registro Nacional de Donantes de Órganos y solía expresar a sus amigos su firme vocación de ser donante. Sin embargo, su madre, sumida en una crisis de negación al ver el monitor cardíaco aún latiendo por el soporte ventilatorio, se opone radicalmente a la donación diciendo que "su corazón aún palpita y eso significa que sigue vivo". Hay cuatro pacientes en lista de espera de emergencia cero en el hospital.',
    clinicalData: [
      'Muerte encefálica: Criterio legal y biológico de muerte del individuo (cese irreversible de toda función cerebral).',
      'Voluntad expresa del donante: Tarjeta de donante y registro legal afirmativo.',
      'Soporte artificial somático activo únicamente para preservación de órganos.',
      'Madre en fase de shock con incomprensión del concepto de muerte cerebral.'
    ],
    bioethicalDilemma: '¿Debe prevalecer la voluntad expresada en vida por el donante fallecido o debe abordarse el conflicto con la familia mediante mediación sin incurrir en ilegalidades ni violencia emocional?',
    question: '¿Cuál es la actuación médica y bioética más correcta?',
    options: [
      {
        id: 'A',
        text: 'Proceder a la extracción quirúrgica de inmediato por la fuerza con custodia de seguridad, ignorando el dolor de la madre ya que el paciente firmó en vida.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          communication: -25,
          beneficence: -10,
          autonomy: +10
        },
        resultTitle: 'DECISIÓN JURÍDICAMENTE VÁLIDA PERO HUMANAMENTE VIOLENTA',
        outcomeNarrative: 'Los órganos salvaron vidas, pero la madre sufrió un trauma psicológico devastador y el hospital enfrentó una crisis de reputación pública sobre la humanización del proceso.',
        bioethicalExplanation: 'Aunque la voluntad del donante tiene primacía legal y ética, la extracción forzosa sin contención compasiva destruye la confianza social en el sistema de donación y trasplantes.',
        principlesAffected: [
          { name: 'Comunicación', positive: false, description: 'Ausencia total de empatía y cuidado en el duelo agudo.' }
        ]
      },
      {
        id: 'B',
        text: 'Dedicar tiempo a explicar con calidez pedagógica y apoyo de psicólogos el concepto de muerte encefálica a la madre, mostrarle que el deseo altruista de su hijo era trascender salvando vidas, y lograr una despedida serena y consentida en familia.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          autonomy: +25,
          beneficence: +25,
          communication: +25,
          integrity: +20,
          justice: +20
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE MAGISTRAL: Acompañamiento del Duelo y Respeto al Donante',
        outcomeNarrative: 'La madre comprendió el significado del legado de amor de su hijo, se despidió con paz en una ceremonia íntima en la UCI, y la donación multiorgánica salvó la vida de cuatro personas.',
        bioethicalExplanation: 'La coordinación de trasplantes moderna concilia el respeto a la autonomía post-mortem del donante con el cuidado humano compasivo de la familia en duelo a través de la comunicación empática.',
        principlesAffected: [
          { name: 'Autonomía', positive: true, description: 'Cumplimiento del deseo altruista y generoso del donante.' },
          { name: 'Beneficencia', positive: true, description: 'Múltiples vidas salvadas y contención del dolor de los allegados.' },
          { name: 'Justicia', positive: true, description: 'Aporte solidario a la lista de espera de trasplantes.' }
        ],
        consequenceFlag: 'handled_transplant_empathy_c10'
      },
      {
        id: 'C',
        text: 'Cancelar inmediatamente el proceso de donación ante la primera negativa de la madre sin intentar dialogar ni explicar la muerte encefálica.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          autonomy: -20,
          justice: -15,
          beneficence: -10
        },
        resultTitle: 'DECISIÓN PASIVA: Omisión de la Voluntad del Donante',
        outcomeNarrative: 'Se perdió la oportunidad de cumplir el deseo del fallecido y los cuatro pacientes en lista crítica continuaron en grave riesgo vital.',
        bioethicalExplanation: 'Ceder pasivamente sin ofrecer apoyo educativo y emocional desestima la voluntad expresa del donante y perjudica a receptores en situación crítica.',
        principlesAffected: [
          { name: 'Autonomía', positive: false, description: 'Desatención a la voluntad testamentaria biológica del fallecido.' }
        ]
      }
    ]
  },
  {
    id: 11,
    level: 3,
    levelName: 'NIVEL 3 — BIOÉTICA AVANZADA',
    title: 'Caso 11: Investigación Clínica y Conflicto de Interés',
    subtitle: 'Ética de la investigación, vulnerabilidad y rigor científico',
    patient: {
      name: 'Clara Domínguez y Ensayo Farmacéutico',
      age: 42,
      diagnosis: 'Enfermedad autoinmune refractaria — Candidata a Ensayo Fase III',
      location: 'Laboratorio de Ensayos Clínicos',
      vitalsStatus: 'Estable',
      avatarType: 'clara_research'
    },
    setting: 'research_lab',
    settingName: 'Unidad de Ensayos e Investigación Biomédica',
    clinicalContext: 'El laboratorio farmacéutico que patrocina un ensayo clínico de un nuevo biológico ofrece al servicio médico una compensación económica muy sustancial (2.000 € por cada paciente reclutado). El investigador principal te pide que reclutes urgentemente a Clara, una paciente con escasos recursos económicos y nivel educativo bajo. Al revisar el protocolo, descubres que el fármaco presenta un 15% de riesgo de toxicidad hepática severa que el promotor ha redactado con letra diminuta y jerga técnica incomprensible en el documento de consentimiento. El jefe te dice: "No la asustes con tecnicismos, necesitamos completar el cupo este mes".',
    clinicalData: [
      'Conflicto de interés financiero directo por cuota de enrolamiento.',
      'Sujeto de investigación en condición de vulnerabilidad socioeconómica.',
      'Información sobre efectos adversos graves camuflada en el documento.',
      'Declaración de Helsinki: El bienestar del sujeto de investigación siempre debe prevalecer sobre los intereses de la ciencia y de la sociedad.'
    ],
    bioethicalDilemma: '¿Debe el médico proteger la seguridad y el consentimiento informado transparente del sujeto de investigación o ceder a incentivos económicos y metas de reclutamiento?',
    question: '¿Cuál es el proceder deontológicamente correcto?',
    options: [
      {
        id: 'A',
        text: 'Hacer que Clara firme rápidamente minimizando los riesgos para cobrar el incentivo y asegurar la publicación científica.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          integrity: -35,
          nonMaleficence: -30,
          consent: -25,
          autonomy: -20
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE NEFASTA: Explotación y Fraude Deontológico',
        outcomeNarrative: 'Clara sufrió hepatitis tóxica aguda a las tres semanas. Una auditoría del Comité de Ética de la Investigación (CEIC) suspendió el ensayo y retiró la licencia investigadora al equipo por malas prácticas.',
        bioethicalExplanation: 'Vulnera los códigos fundamentales de Núremberg y la Declaración de Helsinki. Supeditar la seguridad de pacientes vulnerables al lucro económico o prestigio académico es una de las mayores aberraciones en bioética médica.',
        principlesAffected: [
          { name: 'Integridad', positive: false, description: 'Conflicto de interés deshonesto y engaño en investigación.' },
          { name: 'No Maleficencia', positive: false, description: 'Exposición irresponsable a daño farmacológico no advertido.' }
        ],
        consequenceFlag: 'unethical_research_c11'
      },
      {
        id: 'B',
        text: 'Exigir la corrección y simplificación del consentimiento informado, explicar con total transparencia a Clara todos los riesgos hepáticos y alternativas, asegurar que comprenda sin presiones, y denunciar cualquier intento de coacción o reclutamiento deshonesto ante el Comité de Ética.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          integrity: +25,
          consent: +25,
          nonMaleficence: +20,
          autonomy: +20,
          beneficence: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE IMPECABLE: Salvaguarda de la Ética en Investigación',
        outcomeNarrative: 'Clara comprendió honestamente los riesgos y beneficios, decidió participar con monitoreo hepático preventivo semanal estricto, y el ensayo se adecuó a los más altos estándares de transparencia y seguridad.',
        bioethicalExplanation: 'El médico-investigador tiene la obligación intransferible de velar por la protección del sujeto vulnerable. La voluntariedad real exige transparencia absoluta sobre riesgos e independencia frente a patrocinadores comerciales.',
        principlesAffected: [
          { name: 'Integridad', positive: true, description: 'Independencia científica e inmunidad frente a incentivos espurios.' },
          { name: 'Consentimiento', positive: true, description: 'Transparencia y adaptabilidad del proceso de información.' },
          { name: 'No Maleficencia', positive: true, description: 'Protección activa de la seguridad de los participantes.' }
        ],
        consequenceFlag: 'ethical_research_upheld_c11'
      },
      {
        id: 'C',
        text: 'Rechazar a Clara del ensayo sin explicarle nada para evitar tener problemas con el jefe del servicio.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          integrity: -10,
          communication: -15,
          justice: -10
        },
        resultTitle: 'DECISIÓN EVASIVA: Paternalismo de Exclusión',
        outcomeNarrative: 'Clara se quedó sin la posibilidad de acceder a una terapia innovadora que podría haberle ayudado con un consentimiento apropiado.',
        bioethicalExplanation: 'La solución ética no es excluir a pacientes por comodidad, sino garantizar procesos de información y monitoreo transparentes.',
        principlesAffected: [
          { name: 'Justicia', positive: false, description: 'Exclusión no deliberada de oportunidades terapéuticas.' }
        ]
      }
    ]
  },
  {
    id: 12,
    level: 3,
    levelName: 'NIVEL 3 — BIOÉTICA AVANZADA',
    title: 'Caso 12: Inteligencia Artificial en Decisiones Clínicas',
    subtitle: 'Algoritmos diagnósticos, sesgo tecnológico y responsabilidad profesional humana',
    patient: {
      name: 'Sistema "MediPredict-AI" y Paciente Vulnerable',
      age: 63,
      diagnosis: 'Insuficiencia Renal Aguda sobre crónica con recomendación de diálisis',
      location: 'Unidad de Inteligencia Clínica y Nefrología',
      vitalsStatus: 'Grave',
      avatarType: 'ai_diagnostics'
    },
    setting: 'ethics_board',
    settingName: 'Comité de Ética en Innovación y Tecnología Médica',
    clinicalContext: 'El hospital ha implementado un nuevo software de Inteligencia Artificial (MediPredict-AI) para optimizar ingresos a hemodiálisis y tratamientos de alto costo. Al ingresar los datos de Don Samuel (63 años, perteneciente a una minoría étnica desfavorecida y con diabetes), el algoritmo genera una alerta roja: "NO APTO para terapia de reemplazo renal — Score de supervivencia a 1 año: 18% (Desaconsejar tratamiento activo)". Al examinar detalladamente a Don Samuel y revisar sus análisis, tu juicio clínico evidencia que el fallo renal es agudo y reversible (secundario a deshidratación por gastroenteritis), no crónico terminal. El software utilizó una base de datos histórica con sesgo sociodemográfico que infravalora a pacientes de bajos ingresos.',
    clinicalData: [
      'Algoritmo "caja negra" con sesgo de entrenamiento en poblaciones vulnerables.',
      'Exploración clínica humana: Reversibilidad de la lesión renal con rehidratación y diálisis temporal.',
      'Presión de la administración: "El protocolo de la IA está validado por el consorcio internacional".',
      'Principio bioético: La IA es una herramienta de apoyo; la responsabilidad clínica y el juicio moral siempre recaen en el profesional humano.'
    ],
    bioethicalDilemma: '¿Debe el médico supeditar su juicio clínico humanista al veredicto automatizado de una IA o asumir la responsabilidad ética de rectificar y tratar al paciente?',
    question: '¿Qué postura debe adoptar el médico frente a la tecnología?',
    options: [
      {
        id: 'A',
        text: 'Aceptar la recomendación de la Inteligencia Artificial sin cuestionarla y denegar la diálisis a Don Samuel, porque los algoritmos nunca se equivocan.',
        quality: 'problematic',
        scoreDelta: -10,
        statDeltas: {
          justice: -35,
          nonMaleficence: -30,
          beneficence: -25,
          integrity: -25
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE CATASTRÓFICA: Deshumanización y Sesgo Algorítmico',
        outcomeNarrative: 'Don Samuel falleció por uremia y edema pulmonar evitable. Una auditoría posterior demostró que el software contenía un sesgo discriminatorio sistemático que costó vidas.',
        bioethicalExplanation: 'Delegar la toma de decisiones éticas y clínicas a sistemas algorítmicos sin supervisión crítica ("sesgo de automatización") viola la justicia distributiva y la responsabilidad médica básica. La tecnología debe servir a la persona, jamás sustituir el juicio moral y la compasión humana.',
        principlesAffected: [
          { name: 'Justicia', positive: false, description: 'Perpetuación y agravamiento de sesgos discriminatorios.' },
          { name: 'No Maleficencia', positive: false, description: 'Muerte evitable por omisión de tratamiento debido a fallo del software.' },
          { name: 'Integridad', positive: false, description: 'Abdicación de la responsabilidad médica ante una máquina.' }
        ],
        consequenceFlag: 'blind_ai_submission_c12'
      },
      {
        id: 'B',
        text: 'Priorizar el juicio clínico humano, prescribir la terapia de reemplazo renal urgente para salvar a Don Samuel, y elevar un informe de no conformidad al Comité de Bioética e Innovación para auditar y corregir los sesgos del algoritmo.',
        quality: 'excellent',
        scoreDelta: 25,
        statDeltas: {
          integrity: +25,
          justice: +25,
          beneficence: +25,
          nonMaleficence: +20,
          autonomy: +15
        },
        resultTitle: 'DECISIÓN ÉTICAMENTE EXTRAORDINARIA: Juicio Crítico Humano y Ética Digital',
        outcomeNarrative: 'Don Samuel recuperó su función renal completamente a los 10 días tras recibir diálisis transitoria. Tu informe lideró la primera guía hospitalaria de Inteligencia Artificial Ética y Transparente.',
        bioethicalExplanation: 'Encarna el principio de "Human-in-the-loop" en bioética digital: la tecnología potencia la medicina, pero el profesional sanitario es el garante ético último de la dignidad, la equidad y la vida del paciente.',
        principlesAffected: [
          { name: 'Integridad', positive: true, description: 'Valentía moral y rigor clínico frente a la imposición tecnocrática.' },
          { name: 'Justicia', positive: true, description: 'Defensa de los colectivos vulnerables ante sesgos algorítmicos.' },
          { name: 'Beneficencia', positive: true, description: 'Recuperación exitosa de la salud y preservación de la vida.' }
        ],
        consequenceFlag: 'ethical_ai_champion_c12'
      },
      {
        id: 'C',
        text: 'Desconectar la IA del hospital por completo sin informar a nadie para no tener que discutir con la dirección.',
        quality: 'questionable',
        scoreDelta: +5,
        statDeltas: {
          integrity: -10,
          communication: -15
        },
        resultTitle: 'DECISIÓN IMPRUDENTE: Sabotaje sin Construcción Institucional',
        outcomeNarrative: 'Se generó un conflicto administrativo que retrasó el análisis riguroso del problema en otros servicios.',
        bioethicalExplanation: 'El abordaje ético de la innovación tecnológica requiere gobernanza transparente, auditoría multidisciplinar y diálogo constructivo, no actos unilaterales.',
        principlesAffected: [
          { name: 'Integridad', positive: false, description: 'Falta de comunicación formal ante anomalías institucionales.' }
        ]
      }
    ]
  }
];
