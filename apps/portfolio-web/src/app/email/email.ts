/** Interlocutor */
interface Interlocutor {
  /** email */
  readonly email: string;
  /** name */
  readonly name: string;
}

/** Email */
export interface Email {
  /** htmlContent */
  readonly htmlContent: string;
  /** sender */
  readonly sender: Interlocutor;
  /** subject */
  readonly subject: string;
}
