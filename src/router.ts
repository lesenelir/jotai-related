// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/core`
  | `/dark`
  | `/document1`
  | `/fetch`
  | `/level`
  | `/login`
  | `/ownAtom`
  | `/provider`
  | `/query`
  | `/query/mutation`
  | `/suspense`

export type Params = {
  
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
