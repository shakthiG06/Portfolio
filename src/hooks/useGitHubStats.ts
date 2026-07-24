import { useState, useEffect } from 'react'
import axios from 'axios'

export interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  contributions: number
  loading: boolean
  error: boolean
}

export const useGitHubStats = (username: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 0,
    followers: 0,
    following: 0,
    contributions: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${username}`)
        setStats({
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,
          contributions: 500, // Placeholder — GitHub contributions require auth
          loading: false,
          error: false,
        })
      } catch {
        setStats(prev => ({ ...prev, loading: false, error: true }))
      }
    }
    if (username) fetchStats()
  }, [username])

  return stats
}
