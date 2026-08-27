import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  company?: string
  role?: string
  email?: string
  phone?: string
  country?: string
  businessType?: string
  message?: string
  source?: string
}

const Row = ({ label, value }: { label: string; value?: string | undefined }) =>
  value ? (
    <Text style={row}>
      <span style={rowLabel}>{label}: </span>
      {value}
    </Text>
  ) : null

const Email = ({ name, company, role, email, phone, country, businessType, message, source }: Props) => (
  <Html lang="sk" dir="ltr">
    <Head />
    <Preview>
      Nový dopyt zo sarisparkling.com{name ? ` — ${name}` : ''}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nový dopyt z webu</Heading>
        <Text style={subtitle}>
          {source === 'for-business' ? 'Formulár „Pre podniky“' : 'Kontaktný formulár'}
        </Text>
        <Hr style={hr} />
        <Section>
          <Row label="Meno" value={name} />
          <Row label="Spoločnosť" value={company} />
          <Row label="Rola" value={role} />
          <Row label="Email" value={email} />
          <Row label="Telefón" value={phone} />
          <Row label="Krajina" value={country} />
          <Row label="Typ podniku" value={businessType} />
        </Section>
        <Hr style={hr} />
        <Text style={messageLabel}>Správa:</Text>
        <Text style={messageText}>{message}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          Sari — sarisparkling.com · Odpovedať môžete priamo na email odosielateľa.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Nový dopyt: ${data['name'] ?? 'neznámy'}${data['company'] ? ` (${data['company']})` : ''}`,
  displayName: 'Notifikácia dopytu',
  to: 'hello@sarisparkling.com',
  previewData: {
    name: 'Jana Nováková',
    company: 'Vinotéka Central',
    email: 'jana@example.com',
    country: 'Slovensko',
    businessType: 'Vinotéka',
    message: 'Dobrý deň, mali by sme záujem o ochutnávku Sari pre našu vinotéku.',
    source: 'for-business',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const heading = { fontSize: '22px', color: '#2b2118', margin: '0 0 4px' }
const subtitle = { fontSize: '13px', color: '#8a7a66', margin: '0 0 8px' }
const hr = { borderColor: '#e8e0d4', margin: '16px 0' }
const row = { fontSize: '14px', color: '#2b2118', margin: '4px 0' }
const rowLabel = { color: '#8a7a66' }
const messageLabel = { fontSize: '13px', color: '#8a7a66', margin: '0 0 6px' }
const messageText = { fontSize: '15px', color: '#2b2118', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#b0a390', margin: '0' }
