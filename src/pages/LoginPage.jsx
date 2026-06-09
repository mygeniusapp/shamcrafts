import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react'

const LoginPage = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true) // true = login, false = signup
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  // Signup form state
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
  
  // UI state
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    
    if (!loginEmail || !loginPassword) {
      setError('Please fill in all fields')
      return
    }
    
    // Demo login - in production, call your API
    console.log('Login:', { email: loginEmail, password: loginPassword })
    setSuccess('Login successful! Redirecting...')
    setTimeout(() => navigate('/'), 1500)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setError('')
    
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword) {
      setError('Please fill in all fields')
      return
    }
    
    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    // Demo signup - in production, call your API
    console.log('Signup:', { name: signupName, email: signupEmail, password: signupPassword })
    setSuccess('Account created! Redirecting to login...')
    setTimeout(() => {
      setIsLogin(true)
      setSuccess('')
      setSignupName('')
      setSignupEmail('')
      setSignupPassword('')
      setSignupConfirmPassword('')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-surface rounded-2xl shadow-xl p-8">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">ShamCrafts</h1>
          <p className="text-neutral-900/60 mt-2">
            {isLogin ? 'Welcome back!' : 'Join the artisan community'}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2 mb-6 bg-background rounded-lg p-1">
          <button
            onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
            className={`flex-1 py-2 rounded-md transition ${
              isLogin ? 'bg-primary text-white' : 'text-neutral-900 hover:bg-primary/10'
            }`}
          >
            <LogIn size={18} className="inline mr-2" />
            Login
          </button>
          <button
            onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
            className={`flex-1 py-2 rounded-md transition ${
              !isLogin ? 'bg-primary text-white' : 'text-neutral-900 hover:bg-primary/10'
            }`}
          >
            <UserPlus size={18} className="inline mr-2" />
            Sign Up
          </button>
        </div>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-900/40 hover:text-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                <span className="text-neutral-900/70">Remember me</span>
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition font-medium"
            >
              Sign In
            </button>
          </form>
        ) : (
          /* Signup Form */
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type="text"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="Ahmed Al-Hussein"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="Minimum 6 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-900/40 hover:text-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-900/40" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-neutral-900/20 rounded-lg focus:outline-none focus:border-primary bg-background"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-900/40 hover:text-primary"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" required className="rounded text-primary focus:ring-primary" />
              <span className="text-sm text-neutral-900/70">
                I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition font-medium"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Demo note */}
        <div className="mt-6 text-center text-xs text-neutral-900/50 border-t border-neutral-900/10 pt-4">
          Demo credentials: any email & password (no backend)
        </div>
      </div>
    </div>
  )
}

export default LoginPage