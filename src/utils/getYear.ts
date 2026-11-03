export default function getYear(): void {
    const now: Date = new Date();
    const yearContainer: HTMLElement | null = document.getElementById('year');

    if (yearContainer) {
        yearContainer.textContent = String(now.getFullYear());
    }
}
