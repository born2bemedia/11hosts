'use client';

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DTitle,
} from '@radix-ui/react-dialog';

import st from './dialog.module.scss';
import {
  contactSchema,
  type ContactSchema,
} from '@/features/contact-dialog/lib';
import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { Title } from '@/shared/ui/kit/title';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { sendContactReq, useContactDialogStore } from '../../services';
import { TextArea } from '@/shared/ui/kit/text-area';
import { Button } from '@/shared/ui/kit/button';
import { CloseIcon } from '@/shared/ui/icons';
import { useState } from 'react';

export function ContactDialog() {
  const [thankYou, setThankYou] = useState(false);

  const { open, setOpen } = useContactDialogStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      message: '',
      name: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ContactSchema) => {
    const res = await sendContactReq(data);
    console.log(res);

    if (res.status === 'OK') {
      reset();
      setThankYou(true);
    }
  });

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Portal>
        <Overlay className={st.dialogOverlay} />
        <Content className={st.dialogContent}>
          <DTitle />
          <Description asChild>
            {!thankYou ? (
              <form onSubmit={onSubmit} className={st.formLayout}>
                <Title as="h3" className={st.title}>
                  Get in Touch With Our Expert Hosting Team
                </Title>
                <Close className={st.close}>
                  <CloseIcon />
                </Close>
                <Text className={st.text}>
                  We&#39;re shaping the future of hosting and domain solutions —
                  fast, secure, and hassle-free. Whether you&#39;re launching a
                  project, moving your infrastructure, or just exploring
                  options, leave us your contact info and we&#39;ll get back to
                  you shortly.
                </Text>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      placeholder="Name"
                      hint={error?.message}
                      intent={error?.message ? 'danger' : 'primary'}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      placeholder="Email"
                      type="email"
                      hint={error?.message}
                      intent={error?.message ? 'danger' : 'primary'}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextArea
                      {...field}
                      placeholder="Message / Project Details"
                      hint={error?.message}
                      intent={error?.message ? 'danger' : 'primary'}
                    />
                  )}
                />
                <Button>{isSubmitting ? 'Sending...' : 'Send Request'}</Button>
              </form>
            ) : (
              <section className={st.formLayout}>
                <div className={st.thanks}>
                  <Title as="h3" className={st.title}>
                    Thank you!
                  </Title>
                  <Text className={st.text}>
                    Your message has been received. Our team will reach out to
                    you soon.
                  </Text>
                </div>
                <Button onClick={() => setOpen(false)}>Continue</Button>
              </section>
            )}
          </Description>
        </Content>
      </Portal>
    </Root>
  );
}
