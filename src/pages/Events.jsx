import { useState } from 'react'
import TerminalHeading from '../components/TerminalHeading'
import Modal from '../components/Modal'
import { events, gallery } from '../data/events'
import { accent } from '../utils/accents'
import { asset } from '../utils/asset'

function EventCard({ event, onOpen }) {
  const a = accent(event.accent)
  const preview = event.features.slice(0, 3)
  const extra = event.features.length - preview.length

  return (
    <article className="panel panel-hover group flex flex-col overflow-hidden">
      <div className="relative h-44 overflow-hidden border-b border-line bg-void">
        <img
          src={asset(event.cover)}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`rounded border ${a.border} ${a.bg} px-2 py-0.5 text-[10px] uppercase tracking-widest ${a.text}`}
          >
            {event.badge}
          </span>
          <span className="rounded border border-line bg-void/80 px-2 py-0.5 text-[10px] text-ink-faint">
            {event.since}
          </span>
        </div>

        <h3
          className={`absolute bottom-3 left-4 terminal-text text-3xl font-bold ${a.text} glow-text-soft`}
        >
          {event.code}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="terminal-text text-sm font-semibold text-ink">{event.title}</p>
        <p className="mt-1 text-xs text-ink-faint">{event.subtitle}</p>

        <p className="mt-4 text-xs leading-6 text-ink-dim">
          {event.description.slice(0, 150)}...
        </p>

        <div className="mt-5">
          <p className="text-[10px] uppercase tracking-widest text-ink-faint">Key Features:</p>
          <ul className="mt-2 space-y-1.5">
            {preview.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-ink-dim">
                <span className={a.textDim}>▸</span>
                {f}
              </li>
            ))}
            {extra > 0 && <li className="text-xs text-ink-faint">+{extra} more...</li>}
          </ul>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className={`mt-6 self-start rounded-lg border ${a.border} px-4 py-2 text-xs uppercase tracking-widest ${a.text} transition-all duration-300 hover:bg-white/5`}
        >
          ./explore_event
        </button>
      </div>
    </article>
  )
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  if (!item) return null
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-void/93 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => (e.stopPropagation(), onPrev())}
        className="absolute left-4 rounded-full border border-line bg-void/80 px-3.5 py-2 text-term transition-colors hover:border-term/60"
        aria-label="Previous"
      >
        ‹
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
        <img
          src={asset(item.src)}
          alt={item.label}
          className="max-h-[78vh] w-auto rounded-xl border border-line-2 object-contain"
        />
        <figcaption className="mt-3 text-center text-xs text-ink-dim">
          <span className="text-term">{item.label}</span> — click outside to close
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => (e.stopPropagation(), onNext())}
        className="absolute right-4 rounded-full border border-line bg-void/80 px-3.5 py-2 text-term transition-colors hover:border-term/60"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  )
}

export default function Events() {
  const [active, setActive] = useState(null)
  const [lightbox, setLightbox] = useState(-1)
  const a = active ? accent(active.accent) : null

  const move = (delta) =>
    setLightbox((i) => (i + delta + gallery.length) % gallery.length)

  return (
    <>
      <section className="vignette relative overflow-hidden border-b border-line">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <TerminalHeading
            file="events.cpp"
            host="events"
            command="ls -la legendary_events/"
            title="Events & Activities"
            subtitle="Join our legendary events that have been shaping the IT landscape in Morocco. From competitive programming to ethical hacking, we host the most prestigious tech events."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.id} event={e} onOpen={() => setActive(e)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-abyss/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TerminalHeading
            host="gallery"
            command="./display_memories.sh"
            title="Event Gallery"
            subtitle="Click any image to view larger • Scroll horizontally for more"
          />

          <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-ink-faint">
            Reliving memories
          </p>

          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative h-52 w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-void transition-all duration-300 hover:border-term/50"
              >
                <img
                  src={asset(g.src)}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 grayscale-[45%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0"
                />
                <span className="absolute bottom-2 left-3 rounded border border-line bg-void/85 px-2 py-0.5 text-[10px] tracking-widest text-term">
                  {g.label}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-ink-faint">
            {gallery.length} precious memories from our journey — navigate with the arrows
          </p>
        </div>
      </section>

      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.code}
        subtitle={active?.title}
        maxWidth="max-w-3xl"
      >
        {active && (
          <div className="space-y-8">
            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>&gt; Description</h4>
              <p className="mt-3 text-sm leading-7 text-ink-dim">{active.description}</p>
            </section>

            <section>
              <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>&gt; Event Features</h4>
              <ul className="mt-3 space-y-2">
                {active.features.map((f, i) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink-dim">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-line text-[10px] ${a.text}`}
                    >
                      {i + 1}
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            {active.gallery.length > 0 && (
              <section>
                <h4 className={`terminal-text text-sm font-semibold ${a.text}`}>
                  &gt; Event Showcase
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {active.gallery.map((src) => (
                    <img
                      key={src}
                      src={asset(src)}
                      alt={active.code}
                      loading="lazy"
                      className="h-28 w-full rounded-lg border border-line object-cover opacity-70 transition-opacity duration-300 hover:opacity-100"
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </Modal>

      <Lightbox
        item={lightbox >= 0 ? gallery[lightbox] : null}
        onClose={() => setLightbox(-1)}
        onPrev={() => move(-1)}
        onNext={() => move(1)}
      />
    </>
  )
}
