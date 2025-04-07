import jwt from 'jsonwebtoken';

interface TokenPayload {
  authenticated: boolean;
  domain: string;
}

const JWT_SECRET = process.env.JWT_SECRET!;
const DOMAIN = process.env.DOMAIN || 'localhost';

export function verifyToken(token: string): boolean {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as unknown as TokenPayload;
    
    // Check if we're in a development environment
    if (process.env.NODE_ENV === 'development') {
      // In development, we'll accept 'localhost' or '127.0.0.1'
      return decoded && (decoded.domain === 'localhost' || decoded.domain === '127.0.0.1');
    } else {
      // In production, strictly check the domain
      return decoded && decoded.domain === DOMAIN;
    }
  } catch {
    return false;
  }
}

export function createToken(): string {
  return jwt.sign(
    { 
      authenticated: true,
      domain: DOMAIN
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}