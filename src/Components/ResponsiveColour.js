export const h2ClassColour = (colours = {}) => {
    const rootColour = document.documentElement;
    if (colours.accent) rootColour.style.setProperty('--agent-accent-color', colours.accent);
    if (colours.primary) rootColour.style.setProperty('--agent-primary-color', colours.primary);
    if (colours.secondary) rootColour.style.setProperty('--agent-secondary-color', colours.secondary);
}