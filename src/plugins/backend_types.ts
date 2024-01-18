export enum DriveMode {
  STOP,
  FORWARD,
  REVERSE,
  OFFLINE = 254
}

export type VFDState = {
  tgt_frequency: number
  cur_frequency: number
  tgt_drive_mode: DriveMode
  cur_drive_mode: DriveMode
  output_voltage: number
  output_current: number
  input_power: number
  max_frequency: number
}

export type VFD = {
  state: VFDState
  id: string
  display_name: string
  name: string
  slave_id: number
}
