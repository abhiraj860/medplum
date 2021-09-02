import { Meta } from '@storybook/react';
import React from 'react';
import { EncounterTimeline } from '../EncounterTimeline';

export default {
  title: 'Medplum/EncounterTimeline',
  component: EncounterTimeline,
} as Meta;

export const Encounter = () => (
  <EncounterTimeline encounter={{ reference: 'Encounter/' + process.env.SAMPLE_ENCOUNTER_ID }} />
);
