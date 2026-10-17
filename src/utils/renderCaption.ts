import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

export function renderCaption(caption: string): string {
  const html = marked.parseInline(caption, {
    async: false,
  }) as string;

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['a', 'strong', 'em', 'code', 'br'],
    ALLOWED_ATTR: ['href', 'title'],
  });
}
