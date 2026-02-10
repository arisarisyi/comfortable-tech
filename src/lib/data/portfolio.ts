import { ExperiencePhase } from '$lib/experience/Phase.js';

export interface PortfolioItem {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	phase: ExperiencePhase;
	category: 'fullstack' | 'security' | 'iot';
	featured?: boolean;
	link?: string;
}

export const portfolio: PortfolioItem[] = [
	{
		id: 'distributed-api',
		title: 'Distributed API System',
		description:
			'High-performance distributed REST API built using Go and Node.js with Kubernetes orchestration and horizontal scaling.',
		technologies: ['Go', 'Node.js', 'Kubernetes', 'Docker', 'PostgreSQL'],
		phase: ExperiencePhase.FULLSTACK,
		category: 'fullstack',
		featured: true
	},
	{
		id: 'realtime-monitoring',
		title: 'Real-time Monitoring Dashboard',
		description:
			'Live system monitoring dashboard with WebSocket streaming and real-time visualization.',
		technologies: ['Svelte', 'WebSocket', 'TypeScript', 'Grafana'],
		phase: ExperiencePhase.FULLSTACK,
		category: 'fullstack'
	},
	{
		id: 'web-pentest',
		title: 'Web Application Penetration Test',
		description:
			'Security assessment identifying OWASP Top 10 vulnerabilities and privilege escalation paths.',
		technologies: ['Burp Suite', 'Nmap', 'Metasploit', 'Custom Scripts'],
		phase: ExperiencePhase.SECURITY,
		category: 'security',
		featured: true
	},
	{
		id: 'api-security',
		title: 'API Security Assessment',
		description:
			'Comprehensive API security testing including authentication bypass and access control analysis.',
		technologies: ['Burp Suite', 'Postman', 'Custom Tools'],
		phase: ExperiencePhase.SECURITY,
		category: 'security'
	},
	{
		id: 'esp32-telemetry',
		title: 'ESP32 Telemetry System',
		description:
			'Real-time sensor telemetry system using ESP32 with MQTT and cloud integration.',
		technologies: ['ESP32', 'MQTT', 'Embedded C', 'GCP'],
		phase: ExperiencePhase.IOT,
		category: 'iot',
		featured: true
	},
	{
		id: 'pcb-sensor',
		title: 'Custom PCB Sensor Board',
		description: 'Custom designed PCB for environmental sensing with embedded firmware.',
		technologies: ['PCB Design', 'Embedded C', 'Arduino', 'ESP32'],
		phase: ExperiencePhase.IOT,
		category: 'iot'
	}
];

export function getPortfolioByPhase(phase: ExperiencePhase): PortfolioItem[] {
	return portfolio.filter((item) => item.phase === phase);
}
