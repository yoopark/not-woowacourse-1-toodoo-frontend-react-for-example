import { Switch, type SwitchProps } from '@/components/ui/switch';

type ShowAlreadyDoneSwitchProps = Pick<
  SwitchProps,
  'checked' | 'onCheckedChange'
>;

const ShowAlreadyDoneSwitch = ({
  checked,
  onCheckedChange,
}: ShowAlreadyDoneSwitchProps) => {
  return <Switch checked={checked} onCheckedChange={onCheckedChange} />;
};

export { ShowAlreadyDoneSwitch };
