import { useState } from 'react'
import './App.css'

const scoreMetrics = [
  { label: 'ATS match', value: 96, tone: 'bg-emerald-400' },
  { label: 'Keywords', value: 89, tone: 'bg-cyan-400' },
  { label: 'Impact', value: 91, tone: 'bg-violet-400' },
  { label: 'Structure', value: 84, tone: 'bg-amber-400' },
]

const steps = [
  'Upload your resume in PDF or DOCX format',
  'Our AI scans structure, keywords, and achievements',
  'Get a score and improvement suggestions instantly',
]

const highlights = [
  { title: 'ATS score', value: '96%' },
  { title: 'Skills match', value: '18/20' },
  { title: 'Action verbs', value: 'Strong' },
]

function App() {
  const [fileName, setFileName] = useState('resume-preview.pdf')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    setFileName(selectedFile ? selectedFile.name : 'resume-preview.pdf')
  }

  return (
    <div className="page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="topbar mb-12 flex items-center justify-between rounded-full border border-stone-200 bg-[#fffdf9]/80 px-5 py-3 shadow-[0_10px_35px_rgba(46,32,24,0.04)] backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e2a28] font-black text-[#f9f5ef]">
              R
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-[#7c5b48] uppercase">ResumeAI</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#4b433f] md:flex">
            <a href="#features" className="transition hover:text-[#1e2a28]">Features</a>
            <a href="#review" className="transition hover:text-[#1e2a28]">Review</a>
            <a href="#process" className="transition hover:text-[#1e2a28]">How it works</a>
          </nav>

          <button className="rounded-full border border-[#d7c5b8] bg-[#f5efe8] px-4 py-2 text-sm font-medium text-[#2b2522] transition hover:bg-[#efe4d7]">
            Login
          </button>
        </header>

        <main>
          <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d9c8b8] bg-[#f1e7dc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6c4f40]">
                AI powered resume scan
              </span>

              <h1 className="display-serif mt-6 max-w-xl text-5xl font-black tracking-[-0.05em] text-[#1c1b1a] sm:text-6xl">
                Hey, get your score.
                <span className="block text-[#b56745]">Review your resume in minutes.</span>
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-[#4e4a46]">
                Upload your resume, check your fit score, and unlock tailored suggestions to get interviews faster.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <label className="upload-dropzone inline-flex cursor-pointer items-center justify-center rounded-full bg-[#1f2a28] px-6 py-3 text-base font-semibold text-[#f7f2ec] shadow-[0_18px_30px_rgba(31,42,40,0.18)] transition hover:-translate-y-0.5">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  Upload resume
                </label>

                <button className="rounded-full border border-[#d7c5b8] bg-[#f6efe8] px-6 py-3 text-base font-semibold text-[#2c2623] transition hover:bg-[#efe2d5]">
                  See demo
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4f4a46]">
                <span className="rounded-full border border-[#dfd2c5] bg-[#fffdfb] px-3 py-1.5">PDF, DOCX</span>
                <span className="rounded-full border border-[#dfd2c5] bg-[#fffdfb] px-3 py-1.5">ATS match</span>
                <span className="rounded-full border border-[#dfd2c5] bg-[#fffdfb] px-3 py-1.5">Hiring insight</span>
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <div className="score-ring mx-auto flex h-44 w-44 items-center justify-center rounded-full">
                <div className="flex items-end gap-1 text-[#1d1a18]">
                  <span className="text-5xl font-black">92</span>
                  <span className="pb-2 text-lg font-bold text-[#a95a3f]">%</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#514b47]">
                <div className="flex items-center justify-between rounded-2xl border border-[#e5d7c9] bg-[#f7f2ec] px-4 py-3">
                  <span>Resume selected</span>
                  <span className="font-semibold text-[#1d1a18]">{fileName}</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-[#e6d9cd] bg-[#fbf7f2] p-3 text-center">
                      <div className="text-lg font-bold text-[#1d1a18]">{item.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#6d625d]">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="review" className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[#e7dccc] bg-[#fffdf9] p-6 shadow-[0_20px_45px_rgba(48,35,25,0.04)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5a4a]">Resume review</p>
              <h2 className="mt-4 text-3xl font-bold text-[#1d1a18]">Your profile is almost there.</h2>
              <p className="mt-3 text-[#544d49]">
                Based on the current version, your resume is strong and recruiter-ready. A few adjustments can push it into top-tier territory.
              </p>

              <div className="mt-6 space-y-4">
                {scoreMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-[#514d49]">
                      <span>{metric.label}</span>
                      <span className="font-semibold text-[#1d1a18]">{metric.value}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-[#eee3d7]">
                      <div className={`h-full rounded-full ${metric.tone}`} style={{ width: `${metric.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="features" className="rounded-[2rem] border border-[#d8c2ae] bg-gradient-to-br from-[#f4ebdf] via-[#fffdfb] to-[#efe8df] p-6 shadow-[0_25px_60px_rgba(70,52,40,0.06)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5a4a]">AI feedback</p>
                <span className="rounded-full border border-[#bfd5c4] bg-[#eef5f0] px-2.5 py-1 text-xs font-semibold text-[#355446]">
                  Strong fit
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-[#e8d9ca] bg-[#fffdfb] p-4">
                  <p className="text-sm font-semibold text-[#1d1a18]">What stands out</p>
                  <p className="mt-2 text-sm text-[#544d49]">Leadership wins, measurable impact, and a clear product-focused career story are all very strong.</p>
                </div>

                <div className="rounded-2xl border border-[#e8d9ca] bg-[#fffdfb] p-4">
                  <p className="text-sm font-semibold text-[#1d1a18]">What to improve</p>
                  <p className="mt-2 text-sm text-[#544d49]">Add more role-specific keywords in the summary and tighten the skills section to match the job description.</p>
                </div>

                <div className="rounded-2xl border border-[#e8d9ca] bg-[#fffdfb] p-4">
                  <p className="text-sm font-semibold text-[#1d1a18]">Suggested next step</p>
                  <p className="mt-2 text-sm text-[#544d49]">Tailor the first bullet in each role to show more measurable outcomes and business impact.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="mt-20">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7a5a4a]">How it works</p>
              <h2 className="mt-3 text-3xl font-bold text-[#1d1a18]">Simple steps. Smarter results.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-[1.75rem] border border-[#e8d9ca] bg-[#fffdfb] p-5 shadow-[0_16px_35px_rgba(58,42,30,0.04)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f2a28] text-sm font-black text-[#f9f5ef]">
                    0{index + 1}
                  </div>
                  <p className="mt-5 text-lg font-semibold text-[#1d1a18]">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
