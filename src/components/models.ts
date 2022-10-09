export interface NotationConfig {
  // Human-readable name of the notation
  name: string;
  // Textual ID of the notation for the API
  id: string;
  // Target image extension
  target: string;
  // Default notation value
  default: string;
};