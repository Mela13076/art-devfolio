
export function formatDate(dateString: string): string {
    const now = new Date(); 
    const date = new Date(dateString);
    const timeDiff = now.getTime()- date.getTime()
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (dayDiff < 1) return 'Today';
    if (dayDiff === 1) return 'Yesterday';
    if (dayDiff < 7) return `${dayDiff} days ago`;
    if (dayDiff < 30) {
        const weeks = Math.floor(dayDiff / 7);
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}