const questions = [
    // Propósito vs. Operación
    {
        id: 1,
        pillar: "Propósito · Operación",
        text: "¿Qué tanto de tu día se consume en apagar fuegos operativos en lugar de construir visión?",
        type: "scale",
        options: [
            { label: "Todo el día es operativo", value: 1 },
            { label: "Mayoría operativo", value: 2 },
            { label: "Equilibrado", value: 3 },
            { label: "Mayoría visión", value: 4 },
            { label: "Totalmente estratégico", value: 5 }
        ]
    },
    {
        id: 2,
        pillar: "Propósito · Operación",
        text: "Si tuvieras que explicarle a un niño de 10 años por qué existe tu empresa, ¿qué tan sencilla y potente sería tu respuesta?",
        type: "scale",
        options: [
            { label: "Muy confusa", value: 1 },
            { label: "Algo técnica", value: 2 },
            { label: "Clara", value: 3 },
            { label: "Muy clara", value: 4 },
            { label: "Inspiradora y simple", value: 5 }
        ]
    },
    {
        id: 3,
        pillar: "Propósito · Operación",
        text: "¿Sientes que el 'por qué' original de tu negocio se ha diluido frente a la urgencia de las ventas?",
        type: "scale",
        options: [
            { label: "Totalmente diluido", value: 1 },
            { label: "Se está perdiendo", value: 2 },
            { label: "A veces", value: 3 },
            { label: "Se mantiene vivo", value: 4 },
            { label: "Es el motor diario", value: 5 }
        ]
    },
    // Personas y Roles
    {
        id: 4,
        pillar: "Personas · Roles",
        text: "¿Sientes que si te ausentas 2 semanas, la empresa entraría en caos operativo?",
        type: "scale",
        options: [
            { label: "Colapso total", value: 1 },
            { label: "Muchos problemas", value: 2 },
            { label: "Se mantiene con esfuerzo", value: 3 },
            { label: "Funciona bien", value: 4 },
            { label: "Funciona perfecto", value: 5 }
        ]
    },
    {
        id: 5,
        pillar: "Personas · Roles",
        text: "¿Tus líderes clave están resolviendo problemas de hoy o anticipando los de mañana?",
        type: "scale",
        options: [
            { label: "Solo el hoy", value: 1 },
            { label: "Mayoría reactivos", value: 2 },
            { label: "Mitad y mitad", value: 3 },
            { label: "Mayoría proactivos", value: 4 },
            { label: "Visión de futuro", value: 5 }
        ]
    },
    {
        id: 6,
        pillar: "Personas · Roles",
        text: "Al pensar en tu equipo, ¿ves una base que te proyecta o una estructura que requiere que tú la cargues?",
        type: "scale",
        options: [
            { label: "Yo cargo con todo", value: 1 },
            { label: "Casi todo recae en mí", value: 2 },
            { label: "Equilibrio frágil", value: 3 },
            { label: "Me apoyan bien", value: 4 },
            { label: "Ellos impulsan el barco", value: 5 }
        ]
    },
    // Procesos Críticos
    {
        id: 7,
        pillar: "Procesos Críticos",
        text: "¿Tus procesos dependen de la memoria de las personas o de sistemas diseñados y documentados?",
        type: "scale",
        options: [
            { label: "100% memoria", value: 1 },
            { label: "Poco documentado", value: 2 },
            { label: "Mezcla", value: 3 },
            { label: "Bien documentado", value: 4 },
            { label: "Sistemas autónomos", value: 5 }
        ]
    },
    {
        id: 8,
        pillar: "Procesos Críticos",
        text: "¿Tus procesos actuales están diseñados para el tamaño de empresa que quieres ser, o solo para el que eres hoy?",
        type: "scale",
        options: [
            { label: "Solo para hoy", value: 1 },
            { label: "Limitados", value: 2 },
            { label: "En transición", value: 3 },
            { label: "Escalables", value: 4 },
            { label: "Visión exponencial", value: 5 }
        ]
    },
    {
        id: 9,
        pillar: "Procesos Críticos",
        text: "¿Qué tanto afectan los errores operativos la confianza de tus clientes actuales?",
        type: "scale",
        options: [
            { label: "Constantemente", value: 1 },
            { label: "Frecuentemente", value: 2 },
            { label: "Ocasionalmente", value: 3 },
            { label: "Rara vez", value: 4 },
            { label: "Nunca", value: 5 }
        ]
    },
    // Rumbo y Claridad
    {
        id: 10,
        pillar: "Rumbo · Claridad",
        text: "¿Tienes un objetivo estratégico claro para los próximos 90 días que todo tu equipo conozca?",
        type: "scale",
        options: [
            { label: "No tengo", value: 1 },
            { label: "Solo yo lo sé", value: 2 },
            { label: "En proceso", value: 3 },
            { label: "La mayoría lo sabe", value: 4 },
            { label: "Alineación total", value: 5 }
        ]
    },
    {
        id: 11,
        pillar: "Rumbo · Claridad",
        text: "¿El crecimiento te está quitando libertad en lugar de dártela?",
        type: "scale",
        options: [
            { label: "Soy esclavo", value: 1 },
            { label: "Mucha presión", value: 2 },
            { label: "A veces", value: 3 },
            { label: "Tengo control", value: 4 },
            { label: "Libertad total", value: 5 }
        ]
    },
    {
        id: 12,
        pillar: "Rumbo · Claridad",
        text: "¿Qué tan alineado está hoy tu equipo con tu visión de futuro?",
        type: "scale",
        options: [
            { label: "Nada alineados", value: 1 },
            { label: "Poca alineación", value: 2 },
            { label: "Mitad y mitad", value: 3 },
            { label: "Muy alineados", value: 4 },
            { label: "Sincronía total", value: 5 }
        ]
    }
];

let currentStep = 0;
let answers = {};

function initDiagnostic() {
    renderStep(0);
}

function renderStep(index) {
    const container = document.getElementById('diagnostic-steps');
    container.innerHTML = '';

    if (index >= questions.length) {
        showResults();
        return;
    }

    const q = questions[index];
    const progress = Math.round((index / questions.length) * 100);

    const stepDiv = document.createElement('div');
    stepDiv.className = 'step active';
    stepDiv.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div class="section-label" style="display: flex; justify-content: space-between;">
                <span>${q.pillar}</span>
                <span>${index + 1} / ${questions.length}</span>
            </div>
            <div style="height: 2px; background: var(--border-color); width: 100%; margin-top: 10px;">
                <div style="height: 100%; background: var(--accent); width: ${progress}%; transition: width 0.3s;"></div>
            </div>
        </div>
        <h2 class="serif">${q.text}</h2>
        <div class="options">
            ${q.options.map(opt => `
                <button class="option-btn" onclick="selectOption(${q.id}, ${opt.value})">
                    ${opt.label}
                </button>
            `).join('')}
        </div>
    `;
    container.appendChild(stepDiv);
}

function selectOption(qId, value) {
    answers[qId] = value;
    currentStep++;
    renderStep(currentStep);
}

const actionPlans = {
    "Exploración Intuitiva": [
        "Día 1: Define tu 'Por qué' en una sola frase.",
        "Día 2: Identifica las 3 tareas que más tiempo te quitan.",
        "Día 3: Documenta UN proceso sencillo que haces diario.",
        "Día 4: Revisa tu agenda y bloquea 1 hora para estrategia.",
        "Día 5: Habla con tu equipo sobre la visión a 90 días.",
        "Día 6: Identifica un cuello de botella operativo.",
        "Día 7: Define tu métrica de éxito más importante."
    ],
    "Crecimiento Desordenado": [
        "Día 1: Haz un inventario de tareas que puedes delegar hoy.",
        "Día 2: Elige un líder en tu equipo para una tarea crítica.",
        "Día 3: Crea un checklist para la tarea delegada.",
        "Día 4: Ten una reunión de alineación de 15 min.",
        "Día 5: Identifica el error operativo más común.",
        "Día 6: Diseña una solución sistémica para ese error.",
        "Día 7: Mide el tiempo que recuperaste esta semana."
    ],
    "Consolidación Consciente": [
        "Día 1: Identifica procesos que aún dependen de tu firma.",
        "Día 2: Empodera a un líder para decidir sin consultarte.",
        "Día 3: Revisa el Canvas de tu empresa actual.",
        "Día 4: Optimiza el flujo de comunicación interna.",
        "Día 5: Identifica una oportunidad de innovación.",
        "Día 6: Automatiza una tarea repetitiva.",
        "Día 7: Planifica un retiro estratégico de 4 horas."
    ],
    "Escala con Rumbo": [
        "Día 1: Define los valores centrales de tu cultura.",
        "Día 2: Identifica futuros líderes dentro de tu equipo.",
        "Día 3: Revisa tu estrategia de expansión a 1 año.",
        "Día 4: Establece rituales de cultura para tu equipo.",
        "Día 5: Evalúa nuevas tecnologías para eficiencia.",
        "Día 6: Alinea la compensación con los resultados clave.",
        "Día 7: Dedica el día a mentoría de tus líderes."
    ]
};

function calculateMaturity() {
    const totalPossible = questions.length * 5;
    const currentScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const percentage = (currentScore / totalPossible) * 100;

    if (percentage <= 35) return {
        level: "Exploración Intuitiva",
        desc: "Estás en el inicio o en un pivote total. Mucha energía pero el rumbo se decide día a día.",
        tensions: ["Falta de claridad en el 'por qué'", "Dependencia absoluta de tu energía personal"]
    };
    if (percentage <= 60) return {
        level: "Crecimiento Desordenado",
        desc: "Estás vendiendo y creciendo, pero el costo es tu agotamiento personal. La operación te está ganando.",
        tensions: ["Procesos inexistentes o reactivos", "Equipo sin autonomía real"]
    };
    if (percentage <= 80) return {
        level: "Consolidación Consciente",
        desc: "Ya hay orden, pero el equipo aún depende de tu validación final. Estás a un paso de la libertad estratégica.",
        tensions: ["Reticencia a delegar lo crítico", "Sistemas que necesitan optimización"]
    };
    return {
        level: "Escala con Rumbo",
        desc: "Tienes claridad y sistemas. Tu reto es la trascendencia y la optimización de tu legado.",
        tensions: ["Mantener la cultura en el crecimiento", "Innovación estratégica continua"]
    };
}

function showResults() {
    const result = calculateMaturity();
    const plan = actionPlans[result.level];
    const container = document.getElementById('diagnostic-container');
    container.innerHTML = `
        <div class="container">
            <div class="result-card animate-in">
                <span class="maturity-label">Tu Nivel de Madurez</span>
                <h2 class="serif" style="font-size: 3rem; margin-bottom: 20px;">${result.level}</h2>
                <p style="font-size: 1.2rem; margin-bottom: 40px;">${result.desc}</p>
                
                <div class="grid-2">
                    <div>
                        <h3 class="serif" style="margin-bottom: 15px;">Tensiones detectadas:</h3>
                        <ul style="list-style: none; color: var(--text-muted);">
                            ${result.tensions.map(t => `<li style="margin-bottom: 10px;">— ${t}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="serif" style="margin-bottom: 15px;">Plan de 7 días:</h3>
                        <ul style="list-style: none; color: var(--text-muted); font-size: 0.95rem;">
                            ${plan.slice(0, 3).map(p => `<li style="margin-bottom: 8px;">• ${p}</li>`).join('')}
                            <li style="font-style: italic; margin-top: 10px;">Y 4 acciones más en tu descarga...</li>
                        </ul>
                    </div>
                </div>

                <div style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--border-color); text-align: center;">
                    <p style="margin-bottom: 32px;">Tu camino a la claridad estratégica comienza aquí.</p>
                    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                        <button onclick="downloadPlan()" class="btn btn-secondary">Descargar mi plan completo</button>
                        <a href="https://wa.me/526141704597?text=Hola%20Cyn,%20obtuve%20el%20nivel%20'${encodeURIComponent(result.level)}'%20en%20el%20diagnóstico%20y%20quiero%20inscribirme%20al%20curso" 
                           class="btn whatsapp-btn">Inscribirme al curso vía WhatsApp</a>
                    </div>
                    <div style="margin-top: 30px;">
                        <a href="#taller" style="color: var(--text-muted); text-decoration: underline; font-size: 0.9rem;">Ver detalles del taller presencial</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Smooth scroll to results
    window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
}

async function downloadPlan() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const result = calculateMaturity();
    const plan = actionPlans[result.level];

    // Header
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("EMPRESARIOS CON RUMBO", 20, 20);
    doc.setFontSize(14);
    doc.text("PLAN DE ACCIÓN DE 7 DÍAS", 20, 30);

    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Level
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Nivel de Madurez: ${result.level}`, 20, 50);
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(result.desc, 170);
    doc.text(descLines, 20, 58);

    // Tensions
    let currentY = 58 + (descLines.length * 7);
    doc.setFont("helvetica", "bold");
    doc.text("TENSIONES DETECTADAS:", 20, currentY + 10);
    doc.setFont("helvetica", "normal");
    result.tensions.forEach((t, i) => {
        doc.text(`- ${t}`, 25, currentY + 18 + (i * 7));
    });

    // Plan
    currentY = currentY + 18 + (result.tensions.length * 7) + 5;
    doc.setFont("helvetica", "bold");
    doc.text("TU PLAN PASO A PASO:", 20, currentY + 10);
    doc.setFont("helvetica", "normal");
    plan.forEach((p, i) => {
        doc.text(p, 25, currentY + 18 + (i * 7));
    });

    // Footer / Call to action
    currentY = currentY + 18 + (plan.length * 7) + 20;
    doc.line(20, currentY, 190, currentY);

    doc.setFont("helvetica", "italic");
    const footerText1 = "Transformemos lo que te preocupa en un mapa accionable juntos.";
    const footerText2 = "Nos vemos en el taller Empresarios con rumbo.";
    doc.text(footerText1, 20, currentY + 10);
    doc.text(footerText2, 20, currentY + 17);

    doc.setFont("helvetica", "bold");
    doc.text("7 de febrero", 20, currentY + 27);

    doc.setTextColor(0, 0, 255);
    const waLink = "https://wa.me/526141704597?text=Hola%20Cyn,%20quiero%20inscribirme%20al%20taller";
    doc.textWithLink("Inscripciones aquí", 20, currentY + 34, { url: waLink });

    doc.save(`Plan_Accion_7_Dias_${result.level.replace(/\s+/g, '_')}.pdf`);
}

document.addEventListener('DOMContentLoaded', initDiagnostic);
