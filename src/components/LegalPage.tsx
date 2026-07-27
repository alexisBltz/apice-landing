import type { ReactNode } from 'react';
import { Logo } from './Logo';

const email = 'support.apice@gmail.com';

function Layout({ title, children }: { title: string; children: ReactNode }) {
  return <div className="min-h-screen bg-negro text-blancoA">
    <header className="border-b border-white/10"><div className="wrap flex h-20 items-center justify-between">
      <a href="/" aria-label="Inicio de Ápice"><Logo size={42} /></a>
      <a href="/" className="text-sm text-niebla hover:text-white">Volver al inicio</a>
    </div></header>
    <main className="wrap py-16 md:py-24"><article className="legal-copy mx-auto max-w-3xl">
      <p className="eyebrow">Ápice · Información legal</p>
      <h1 className="mt-4 text-[clamp(38px,7vw,64px)] leading-none">{title}</h1>
      <p className="mt-5 text-sm text-niebla2">Vigente y actualizada el 26 de julio de 2026</p>
      <div className="mt-12">{children}</div>
    </article></main>
    <footer className="border-t border-white/10 py-8"><div className="wrap flex flex-wrap justify-between gap-4 text-xs text-niebla2">
      <span>© 2026 Ápice · Arequipa, Perú</span>
      <div className="flex gap-5"><a href="/privacidad">Privacidad</a><a href="/eliminar-cuenta">Eliminar cuenta</a></div>
    </div></footer>
  </div>;
}

function Privacy() {
  return <Layout title="Política de privacidad">
    <p className="legal-lead">Esta política explica qué información utiliza Ápice, por qué la necesita y qué opciones tienes sobre tus datos.</p>
    <h2>Información que tratamos</h2>
    <ul>
      <li><strong>Cuenta:</strong> nombre visible, correo, identificadores y credenciales protegidas.</li>
      <li><strong>Aprendizaje:</strong> cursos, prácticas, respuestas, aciertos, tiempos, rachas, progreso, diagnósticos e Impulsos.</li>
      <li><strong>Vínculo familiar:</strong> datos para relacionar al estudiante con su padre, madre o apoderado y gestionar su consentimiento.</li>
      <li><strong>Suscripción:</strong> estado de Premium y solicitudes de pago. No almacenamos tarjetas ni credenciales bancarias.</li>
      <li><strong>Datos técnicos:</strong> dispositivo, sistema, versión, eventos de uso y reportes de errores.</li>
    </ul>
    <p>No solicitamos ubicación precisa, contactos, micrófono ni cámara para el funcionamiento normal.</p>
    <h2>Para qué usamos los datos</h2>
    <p>Para proteger tu cuenta, personalizar el estudio, calcular el progreso, informar al apoderado vinculado, atender soporte, prevenir fraude y mejorar la aplicación.</p>
    <h2>Analítica y reproducción de sesión</h2>
    <p>Si autorizas <strong>Ayudar a mejorar Ápice</strong>, usamos Firebase Analytics, Firebase Crashlytics y PostHog para eventos esenciales y fallos. Una muestra limitada del onboarding puede incluir reproducción protegida, con textos e imágenes enmascarados. No está diseñada para grabar contraseñas, respuestas, conversaciones ni pagos.</p>
    <p>Puedes revocar esta autorización en <strong>Ajustes → Privacidad</strong>; se aplicará a la recopilación futura.</p>
    <h2>Proveedores</h2>
    <ul><li><strong>Supabase:</strong> autenticación, base de datos, almacenamiento y funciones.</li><li><strong>Google Firebase:</strong> notificaciones, analítica y fallos.</li><li><strong>PostHog Cloud EU:</strong> analítica y replay protegido, con autorización.</li></ul>
    <p>No vendemos tus datos ni los usamos para publicidad de terceros. Algunos proveedores pueden procesarlos fuera del Perú con salvaguardas técnicas y contractuales.</p>
    <h2>Seguridad y conservación</h2>
    <p>Aplicamos cifrado en tránsito, controles de acceso y reglas por usuario. Conservamos los datos mientras la cuenta esté activa o el tiempo necesario para prestar el servicio, cumplir la ley, resolver disputas y prevenir abuso.</p>
    <h2>Menores de edad</h2>
    <p>Los estudiantes usan Ápice conforme al flujo de consentimiento. Para Premium de un menor se requiere la participación y autorización de su padre, madre o apoderado.</p>
    <h2>Tus derechos</h2>
    <p>Puedes actualizar datos, administrar permisos y ejercer los derechos de acceso, rectificación, cancelación u oposición conforme a la Ley N.º 29733 del Perú. Para borrar tu cuenta visita <a href="/eliminar-cuenta">Eliminación de cuenta</a> o usa <strong>Ajustes → Borrar mi cuenta</strong>.</p>
    <h2>Contacto y cambios</h2>
    <p>Publicaremos aquí cualquier actualización. Escríbenos a <a href={'mailto:' + email}>{email}</a> o mediante <a href="https://wa.me/51936224203">WhatsApp</a>.</p>
  </Layout>;
}

function Deletion() {
  const subject = encodeURIComponent('Solicitud de eliminación de cuenta Ápice');
  return <Layout title="Elimina tu cuenta y tus datos">
    <p className="legal-lead">Puedes eliminar tu cuenta desde Ápice o iniciar aquí una solicitud si ya no tienes acceso a la aplicación.</p>
    <h2>Desde la aplicación</h2>
    <ol><li>Inicia sesión en Ápice.</li><li>Abre <strong>Ajustes</strong>.</li><li>Selecciona <strong>Borrar mi cuenta</strong> y confirma.</li></ol>
    <h2>Desde la web</h2>
    <p>Escribe desde el correo asociado a tu cuenta. Verificaremos que eres titular para evitar eliminaciones no autorizadas.</p>
    <a className="btn btn-primary mt-3" href={'mailto:' + email + '?subject=' + subject}>Solicitar eliminación por correo</a>
    <p className="mt-4">También puedes escribir a <a href={'mailto:' + email}>{email}</a> con el asunto “Solicitud de eliminación de cuenta Ápice”.</p>
    <h2>Qué se elimina</h2>
    <ul><li>Perfil, preferencias y cuenta.</li><li>Vínculos familiares y consentimientos.</li><li>Progreso, diagnósticos, racha e Impulsos.</li><li>Suscripción y solicitudes asociadas.</li><li>Identificación en las herramientas de analítica aplicables.</li></ul>
    <p>Las respuestas de práctica podrán conservarse solo anonimizadas y agregadas, sin asociación razonable contigo.</p>
    <h2>Plazo y excepciones</h2>
    <p>Procesaremos la solicitud tras verificar la titularidad y dentro del plazo legal aplicable. Podremos conservar temporalmente datos mínimos por obligación legal, disputas, prevención de fraude o seguridad, informándote cuando aplique.</p>
    <h2>Antes de eliminar</h2>
    <p>La eliminación es permanente: no podrás recuperar progreso, racha, Impulsos ni configuración. Para ayuda usa <a href="https://wa.me/51936224203">WhatsApp</a> o revisa la <a href="/privacidad">Política de privacidad</a>.</p>
  </Layout>;
}

export function LegalPage({ page }: { page: 'privacy' | 'deletion' }) {
  return page === 'privacy' ? <Privacy /> : <Deletion />;
}
